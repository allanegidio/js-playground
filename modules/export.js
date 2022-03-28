// Export object with a funcion to be imported.
var die = {
	size: 0,
	totalRolls: 0,
	roll: function(dieSize) { 
		var result = Math.ceil(dieSize * Math.random());
		this.totalRolls++;
		return result;
	}
};

module.exports = die;
//exports.game = die;
