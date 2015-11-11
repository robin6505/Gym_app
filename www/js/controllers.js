angular.module('gymapp')

.controller('SimpleCtrl', function($scope, $state) {
	//add this to controller where you want to disable drag menu open.
	$scope.$root.canDrag = false;
	$scope.selectedDay = 0;
	
	$scope.selectDay = function(index) {
		$scope.selectedDay = index;
	}
	
    $scope.nextPage = function(page) {
        $state.go(page, {}, {
            reload: true
        });
    }
	
	$scope.login = function() {
        $scope.nextPage('login');
    }

    $scope.showAlert = function() {
        alert('You clicked the set bar');
    }

//-------------JSON DUMMY DATA--------------
$scope.program2 = {
		name: 'Bodybuilding',
		date: '5-9-2015',
		style: 'Powerlifting',
		nWeeks: 1,
		nDays: 2,
		weeks: [
		{
			goal: 'strength',
			name: 'Volume Cycle',
			days: [
			{
				name: 'Lower body',
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
					name: 'Leg press',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				},
				{
					name: 'Leg curl',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				},
				{
					name: 'Glute ham raise',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				},
				{
					name: 'abs' ,
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				}
				]
			},
			{
				name: 'Upper body',
				exercises: [
				{
					name: 'Bench press',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
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
					name: 'Pull ups',
					sets: 1,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				},
				{
					name: 'Bicep curl',
					sets: 3,
					reps: 5,
					weight: 100,
					rest: 3,
					comment: '-'
				},
				{
					name: 'Tricep Extensions',
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
				name: 'Workout A Week1',
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
				name: 'Workout B Week2',
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
}]}
//-------------JSON DUMMY DATA--------------
	
})
