$(document).ready(function () {
	var level = 1;
	var liveCount = 3;
	var noSkips = 7;
	var skips = 0;
	function roomLevel(){
	
		switch(level){
			case 1:
				lvOne()
				break;
			case 2:
				lvTwo()
				break;
			case 3:
				//lvThree()
				break;
			case 4:
				//lvFour()
				break;
			case 5:
				//lvFive()
				break;
			case 6:
				//lvSix()
				break;
			case 7:
				//lvSeven()
				break;
			case 8:
				//lvEight()
				break;
			default:
				alert('Error. Refresh page');
		}
	}
	roomLevel()
	
	function lvOne(){
		$('#questionText').html('1.');
		$('#titleText').html('HOW MANY HOLES IN A POLO?');
		$('#q1').html('ONE');
		$('#q2').html('TWO');
		$('#q3').html('THREE');
		$('#q4').html('FOUR');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
	}
	function lvTwo(){
		$('#questionText').html('2.');
		$('#titleText').html('CAN A MATCH BOX?');
		$('#q1').html('YES');
		$('#q2').html('NO');
		$('#q3').html('NO, BUT A TIN CAN');
		$('#q4').html('YES, ONE BEAT MIKE TYSON');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
	}
	$('#q1').click(function(){
		switch(level){
			case 1:
				liveCount--;
				lvOne();
				break;
			case 2:
				//lvTwo()
				break;
			case 3:
				//lvThree()
				break;
			case 4:
				//lvFour()
				break;
			case 5:
				//lvFive()
				break;
			case 6:
				//lvSix()
				break;
			case 7:
				//lvSeven()
				break;
			case 8:
				//lvEight()
				break;
			default:
				alert('Error. Refresh page');
		}
	});
	$('#q2').click(function(){
		switch(level){
			case 1:
				liveCount--;
				lvOne();
				break;
			case 2:
				//lvTwo()
				break;
			case 3:
				//lvThree()
				break;
			case 4:
				//lvFour()
				break;
			case 5:
				//lvFive()
				break;
			case 6:
				//lvSix()
				break;
			case 7:
				//lvSeven()
				break;
			case 8:
				//lvEight()
				break;
			default:
				alert('Error. Refresh page');
		}
	});
	$('#q3').click(function(){
		switch(level){
			case 1:
				liveCount--;
				lvOne();
				break;
			case 2:
				//lvTwo()
				break;
			case 3:
				//lvThree()
				break;
			case 4:
				//lvFour()
				break;
			case 5:
				//lvFive()
				break;
			case 6:
				//lvSix()
				break;
			case 7:
				//lvSeven()
				break;
			case 8:
				//lvEight()
				break;
			default:
				alert('Error. Refresh page');
		}
	});
	$('#q4').click(function(){
		switch(level){
			case 1:
				level++;
				roomLevel();
				break;
			case 2:
				//lvTwo()
				break;
			case 3:
				//lvThree()
				break;
			case 4:
				//lvFour()
				break;
			case 5:
				//lvFive()
				break;
			case 6:
				//lvSix()
				break;
			case 7:
				//lvSeven()
				break;
			case 8:
				//lvEight()
				break;
			default:
				alert('Error. Refresh page');
		}
	});

});