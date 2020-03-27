angular.module('app', []);

angular.module('app').controller('SitesController', function($scope){
    
    $scope.sites = [
        {
            name: 'Birmingham',
            suffix: 'BIRM',
            position: {
                x: 425,
                y: 780
            },
            type: 'Sequencing',
            numberSamples: 12220
        },
        {
            name: 'Cambridge',
            suffix: 'CAMB',
            position: {
                x: 540,
                y: 805
            },
            type: 'Sequencing',
            numberSamples: 170
        },
        {
            name: 'Edimburgh',
            suffix: 'EDIN',
            position: {
                x: 370,
                y: 479
            },
            type: 'Sampling',
            numberSamples:1100
        },
        {
            name: 'Glasgow',
            suffix: 'GLAS',
            position: {
                x: 310,
                y: 478
            },
            type: 'Sequencing',
            numberSamples: 4209
        },
        {
            name: 'Liverpool',
            suffix: 'LIVE',
            position: {
                x: 392,
                y: 703
            },
            type: 'Sequencing',
            numberSamples: 1220
        },
        {
            name: 'Sheffield',
            suffix: 'SHEF',
            position: {
                x: 458,
                y: 703
            },
            type: 'Sequencing',
            numberSamples: 3420
        },
        {
            name: 'Bristol',
            suffix: 'BRIS',
            position: {
                x: 397,
                y: 875
            },
            type: 'Sampling',
            numberSamples: 920
        },
        {
            name: 'Cardiff',
            suffix: 'PHWC',
            position: {
                x: 374,
                y: 860
            },
            type: 'Sampling',
            numberSamples: 2200
        },
        {
            name: 'Norwich',
            suffix: 'NORW',
            position: {
                x: 597,
                y: 770
            },
            type: 'Sequencing',
            numberSamples: 1020
        },
        {
            name: 'University of Nottingham',
            suffix: 'NOTT',
            position: {
                x: 498,
                y: 743
            },
            type: 'Sequencing',
            numberSamples: 1108
        },
        {
            name: 'UCL',
            suffix: 'LOND',
            position: {
                x: 532,
                y: 864
            },
            type: 'Sequencing',
            numberSamples: 2220
        },
        {
            name: 'Northern Ireland',
            suffix: 'NIRE',
            position: {
                x: 234,
                y: 598
            },
            type: 'Sequencing',
            numberSamples: 2280
        },
        {
            name: 'Oxford',
            suffix: 'OXON',
            position: {
                x: 474,
                y: 855
            },
            type: 'Sequencing',
            numberSamples: 1288
        },
    ];

    var modal = document.getElementById('modal'),
        modalCloseBtn = document.getElementById('modal-close');

    $scope.siteType = '';
    $scope.showModal = false;
    $scope.modal = {};

    $scope.filterByType = function(type) {
        $scope.siteType = type;
    }

    $scope.showSiteInfo = function(site) {
        $scope.showModal = true;
        $scope.modal.siteName = site.name;
        $scope.modal.suffix = site.suffix;
        $scope.modal.samples = site.numberSamples;
    }

    $scope.closeModal = function() {
        $scope.showModal = false;
    }
})