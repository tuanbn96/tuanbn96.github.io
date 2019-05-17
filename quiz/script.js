function Question (text,options,answer) {
	this.text = text;
	this.options = options;
	this.answer = answer
}
Question.prototype.pick = function(option) {
	return option === this.answer;