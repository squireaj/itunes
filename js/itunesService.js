var app = angular.module('itunes');

app.service('itunesService', function($http, $q){

	this.getArtist = function (artist, option) {
		var dfd = $q.defer();

		$http({
			method: 'JSONP',
			url: 'https://itunes.apple.com/search?term=' + artist + '&media=' + option + '&callback=JSON_CALLBACK'
		}).then(function(responce) {
			filteredResponce = responce.data.results
			console.log(responce.data.results)
			var newArray = [];
			for (var i = 0; i < filteredResponce.length; i++) {
				var newObj = {
					AlbumArt: filteredResponce[i].artworkUrl100,
					Artist: filteredResponce[i].artistName,
					Collection: filteredResponce[i].collectionName,
					CollectionPrice: filteredResponce[i].collectionPrice,
					Play: filteredResponce[i].previewUrl,
					Type: filteredResponce[i].kind,
					TrackCount: filteredResponce[i].trackCount
				}
				newArray.push(newObj);
			}
			dfd.resolve(newArray);
		})
		return dfd.promise;
	}
  
}); //Real one


	 



















// var app = angular.module('itunes');

// app.service('itunesService', function($http, $q){


// 	var getArtist = function (artist) {
// 		// var dfd = $q.defer();

// 		$http({
// 			method: 'JSONP',
// 			url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
// 		}).then(function(responce) {
// 			console.log(responce);

// 		})
// 	}
//     getArtist('nelly');
// }); //raw data 
