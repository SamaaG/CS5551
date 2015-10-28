describe('LocCtrl', function() {
	var scope;
	
	beforeEach(angular.mock.module('starter'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('LocCtrl', {$scope: scope});
	}));
	
	it("Checks the location creation", function () {
		var size = scope.locs.length;
		scope.createLoc({ title: 'Hello'});
		expect(scope.locs.length).toEqual(size+1);
	});
    
    it("Checks whether the name of the location is correct", function() {
        scope.createLoc({title: 'Home', address: 'Kansas City'});
        expect(scope.locs[scope.locs.length-1].title).toEqual('Home');
    });
    
    it("Checks whether the address of the location is correct", function() {
        scope.createLoc({title: 'hello', address: '123 W'});
        expect(scope.locs[scope.locs.length-1].address).toEqual('123 W');
    });
    
    
});