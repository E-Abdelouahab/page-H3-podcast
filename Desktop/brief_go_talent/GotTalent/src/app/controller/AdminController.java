package app.controller;

public class AdminController {
	Config connectDb=new Con;
}


import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Model.user;

public class Administrator {
	
	
	 static Config connectDb=new Config("jdbc:mysql://localhost/got_talent", "root", "admin1");
	
	public static ArrayList<user> findAllUsers() {
		ArrayList<user> listuser =new ArrayList<>();
		String sql = "select * From user";
		try {
			 PreparedStatement statement = connectDb.connec().prepareStatement(sql);
             ResultSet res=statement.executeQuery();

			while (res.next()) {
				user u=new user();
				u.setId(res.getInt(1));
				u.setFirst_name(res.getString(2));
				u.setLast_name(res.getString(3));
				u.setEmail(res.getString(4));
				u.setPhone(res.getString(5));
				//u.setPassword(res.getString(5));
				listuser.add(u);
;			
			}
			return listuser;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
	}
	
	/* public static boolean adminConnect(String pass ,String email) {
		
		
		PreparedStatement statement;
		String sql= "select * From administrator where password like "+pass+" and email like (select email from user where email like "+email ;
		try {
		System.out.println(sql);
			statement = connectDb.connec().prepareStatement(sql);
		return 	statement.execute();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		} */
        //ResultSet res=statement.executeQuery();
		
	}
	
	void findParticipations() {
		
		String sql= "select * From Participation" ;
		
	}
	
	void findParticipationByUserEmail( String email ) {
		
		String sql= "select * From Participation where  user_id= (select id From user where email = ? )" ;
		
	}
	
	void validationParticipation() {
		
		String sql= "select * From Participation" ;
		
	}
	
	void addParticipation() {
		
		String sql= "select * From Participation" ;
		
	}

}
