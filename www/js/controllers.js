angular.module('gymapp')

.controller('SimpleCtrl', function($scope, $state) {

    $scope.nextPage = function(page) {
        $state.go(page, {}, {
            reload: true
        });
    }
	
	$scope.login = function() {
        $scope.nextPage('login');
    }
	
	$scope.program = {
		name: 'Starting Strength',
		date: '5-9-2015',
		style: 'Powerlifting',
		nWeeks: 2,
		nDays: 3,
		weeks: [
		{
			goal: 'strength',
			name: 'Volume Cycle',
			days: [
			{
				name: 'Workout A',
				exercises: [
				{
					name: 'Squat',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: 'Just squat'
				},
				{
					name: 'Bench press',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: 'bench'
				},
				{
					name: 'Chin-up',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '3 sets to failure or add weight if completing more than 15 reps'
				}
				]
			},
			{
				name: 'Workout B',
				exercises: [
				{
					name: 'Squat',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: 'Just squat'
				},
				{
					name: 'Military press',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				},
				{
					name: 'Deadlift',
					sets: 1,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				}
				]
			},
			{
				name: 'Workout A',
				exercises: [
				{
					name: 'Squat',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: 'Just squat'
				},
				{
					name: 'Bench press',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: 'bench'
				},
				{
					name: 'Chin-up',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '3 sets to failure or add weight if completing more than 15 reps'
				}
				]
			}
			]
		},
		{
			goal: 'strength',
			name: 'Volume Cycle',
			days: [
			{
				name: 'Workout B',
				exercises: [
				{
					name: 'Squat',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: 'Just squat'
				},
				{
					name: 'Military press',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				},
				{
					name: 'Powerclean',
					sets: 5,
					reps: 3,
					weight: 100,
					rest: 3,
					comment: '-'
				}
				]
			},
			{
				name: 'Workout A',
				exercises: [
				{
					name: 'Squat',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: 'Just squat'
				},
				{
					name: 'Bench press',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				},
				{
					name: 'Chins',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				}
				]
			},
			{
				name: 'Workout B',
				exercises: [
				{
					name: 'Squat',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: 'Just squat'
				},
				{
					name: 'Bench press',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: 'bench'
				},
				{
					name: 'Deadlift',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				}
				]
			}
			]
			
			
		}
		]
	}
})
