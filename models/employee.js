var db = require('./db');

module.exports ={

	get: function(id, callback){
		var sql = "select * from employee where id=?";
		db.getResults(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAll: function(callback){
		var sql = "select * from employee";
		db.getResults(sql, null,  function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

	validate: function(user, callback){
		var sql = "select * from employee where username=? and password=?";
		db.getResults(sql, [employee.username, employee.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	insert: function(user, callback){
		var sql = "insert into employee values(?, ?, ?, ?, ?, ?, ?)";

		db.execute(sql, ['', employee.name, employee.username, employee.password, employee.phone, employee.gender, employee.desgn], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	update: function(user, callback){
		var sql = "update employee set name=?, username=?, password=?, phone=?, gender=?, desgn=? where id=?";
		db.execute(sql, [employee.name, employee.username, employee.password, employee.phone, employee.gender, employee.desgn. employee.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	delete: function(id, callback){
		var sql = "delete from employee where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}