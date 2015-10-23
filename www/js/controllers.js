angular.module('gymapp')

.controller('SimpleCtrl', function($scope, $state) {
	//add this to controller where you want to disable drag menu open
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

//-------------JSON DUMMY DATA--------------
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
