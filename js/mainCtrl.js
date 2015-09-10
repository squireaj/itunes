var app = angular.module('itunes');

app.controller('mainCtrl', function($scope, itunesService){

  $scope.filterOptions = {
    filterText: ''
  };
  $scope.dropDown =
  [
    {
      name:'all',
      value: 'all' 
    },
    {
      name: 'music video',
      value: 'musicVideo'
    },
    {
      name: 'movie',
      value: 'movie'
    },
    {
      name: 'music',
      value: 'music'
    },
    {
      name: 'podcast',
      value: 'podcast'
    },
    {
      name: 'TV Show',
      value: 'tvShow'
    }
  ];

  $scope.artist = '';
  $scope.gridOptions = { 
      data: 'songData',
      filterOptions: $scope.filterOptions,
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
        {field: 'TrackCount', displayName: 'Track Count'}
      ]
  };
   $scope.getSongData = function() {
     itunesService.getArtist($scope.artist, $scope.newOption).then(function(myFinalArray){
       $scope.songData = myFinalArray;
       console.log(myFinalArray);
     });
    } 
});




