var Message = function(id) {
	this.id = id;
	this.text = null;
	this.sender = null;
	this.date = new Date();

	return this;
}

module.exports = Message;
