angular.module('spaApp')
.factory('UserService', ['$http', '$q', function($http, $q) {

  // Toggle this flag:
  // false = always load from users.json (good for testing/updates)
  // true  = load from localStorage after first time
  var useLocalStorage = true;

  var storageKey = 'spa_users_v1';
  var users = [];

  // Always load from users.json
  function loadFromJson() {
    var deferred = $q.defer();
    $http.get('data/users.json').then(function(resp){
      users = resp.data;
      deferred.resolve(users);
    }, function(err){
      deferred.reject(err);
    });
    return deferred.promise;
  }

  // Load once from JSON, then cache in localStorage
  function loadFromLocalStorage() {
    var deferred = $q.defer();
    var stored = localStorage.getItem(storageKey);
    if (stored) {
      users = JSON.parse(stored);
      deferred.resolve(users);
    } else {
      $http.get('data/users.json').then(function(resp){
        users = resp.data;
        localStorage.setItem(storageKey, JSON.stringify(users));
        deferred.resolve(users);
      }, function(err){
        deferred.reject(err);
      });
    }
    return deferred.promise;
  }

  // Wrapper: choose mode
  function loadUsers() {
    return useLocalStorage ? loadFromLocalStorage() : loadFromJson();
  }

  function getUsers(){
    return loadUsers();
  }

  function getUserById(id){
    var deferred = $q.defer();
    loadUsers().then(function(list){
      var u = list.find(function(x){ return x.id == id; });
      if (u) {
        deferred.resolve(u);
      } else {
        deferred.reject("User not found");
      }
    }, function(err){ deferred.reject(err); });
  return deferred.promise;
  }


  function updateUser(updated){
    var deferred = $q.defer();
    if (!useLocalStorage) {
      deferred.reject('Edit disabled in JSON mode. Switch useLocalStorage = true to allow edits.');
      return deferred.promise;
    }

    loadFromLocalStorage().then(function(list){
      var idx = list.findIndex(function(x){ return x.id == updated.id; });
      if (idx !== -1) {
        list[idx] = updated;
        localStorage.setItem(storageKey, JSON.stringify(list));
        deferred.resolve(true);
      } else {
        deferred.reject('User not found');
      }
    }, function(err){ deferred.reject(err); });

    return deferred.promise;
  }

  return {
    getUsers: getUsers,
    getUserById: getUserById,
    updateUser: updateUser
  };
}]);
