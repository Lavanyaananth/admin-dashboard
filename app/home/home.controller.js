(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);


    HomeController.$inject = ['logger', 'dataservice', '$state', '$stateParams', 'LoaderService'];


    function HomeController(logger, dataservice, $state, $stateParams, LoaderService) {

        var vm = this;
        dataservice.getForumInfo().then(function(data) {
            if (data) {
                vm.foruminfo = data.data;
                console.log(data.data);
            }
        });
        dataservice.getPopularTopic().then(function(data) {
            if (data) {
                vm.topicinfo = data.data;
                console.log(data.data);
            }
        });

        var options = {
            type: 'line',
            data: {
                labels: ["Sun", "Mon", "Tue","Wed","Thu","Fri","Sat"],
                datasets: [{
                    label: '# of threads',
                    data: [10,7,8,4,3,12,6],
                    backgroundColor:"rgba(131, 156, 178, 1)",
                    strokeColor: "brown",
                    borderWidth: 2
                }, {
                    label: '# of users',
                    data: [7, 10, 5,8,11,15,7],
                    backgroundColor: "rgba(205, 235, 254, 1)",
                    strokeColor: "brown",
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            reverse: false
                        }
                    }]
                }
            }
        }

         var options2 = {
            type: 'line',
            data: {
                labels: ["Sun", "Mon", "Tue","Wed","Thu","Fri","Sat"],
                datasets: [{
                    label: '# of threads answered',
                    data: [9,2,5,11,16,4,8],
                    backgroundColor:"rgba(131, 156, 178, 1)",
                    strokeColor: "brown",
                    borderWidth: 2
                }, {
                    label: '# of users',
                    data: [5,9,2,11,6,7,16],
                    backgroundColor: "rgba(205, 235, 254, 1)",
                    strokeColor: "brown",
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            reverse: false
                        }
                    }]
                }
            }
        }

        var ctx = document.getElementById('chartContainerOne').getContext('2d');
        new Chart(ctx, options);
        var ctx2 = document.getElementById('chartContainerTwo').getContext('2d');
        new Chart(ctx2, options2);
    }
})();