package app.controller;

import java.sql.SQLException;
import java.util.Scanner;



import app.modeles.User;
import config.Config;

import java.sql.PreparedStatement;
import java.sql.ResultSet;


public class UserController extends User {
	
	public UserController(long id, String firstname, String lastname, String email, String tel) {
		super(id, firstname, lastname, email, tel);
		// TODO Auto-generated constructor stub
	}
	
	
	User user;
	Config connectDb;
	 
	 Scanner scanner = new Scanner(System.in);
	public UserController() {
		
		
			connectDb = new Config("jdbc:mysql://localhost/got_talent", "root", "0000");
	}

	
	
	

///////Add User
	
	public void AddUser() throws SQLException {
		Scanner reader = new Scanner(System.in);
		Scanner reader2 = new Scanner(System.in);
		Scanner reader3 = new Scanner(System.in);
		
		 System.out.print("Enter User id, firstname, lastname, Email,tel : ");
		 
		 
		  int id= reader.nextInt();
		  String firstname= reader3.nextLine();
		  String lastname= reader2.nextLine();
		  String email = reader2.nextLine();
		  String tel = reader2.nextLine();
		 UserController user = new UserController(id,firstname,lastname,email,tel); 
		 
	
		
		String sql = "INSERT INTO user (id, first_name, last_name, email,phone) VALUES (?, ?, ?,?,?)";
	 
	PreparedStatement statement = connectDb.connec().prepareStatement(sql);
	statement.setLong(1, id);
	statement.setString(2, firstname);
	statement.setString(3, lastname);
	statement.setString(4, email);
	statement.setString(5, tel);
	 
	int rowsInserted = statement.executeUpdate();
	if (rowsInserted > 0) {
	    System.out.println("A new user was inserted successfully!");
	    
	    
	 
	    
	}
	
	}	

	

	
	////Update User
	
	public void updateUser() throws SQLException {
		
		
		Scanner reader = new Scanner(System.in);
		  System.out.println("Enter your id:");
		  String ido = reader.nextLine();
		  long id = Long.parseLong(ido);
		  System.out.println("Enter your first name:");
		  String fname = reader.nextLine();
		  System.out.println("Enter your last name:");
		  String lname = reader.nextLine();
		  System.out.println("Enter your email:");
		  String email = reader.nextLine();
		  System.out.println("Enter your phone number:");
		  String tel = reader.nextLine();
          String sqlq =  "update user set first_name = '"+ fname +"', last_name = '"+ lname +"', email = '"+ email +"', phone = '"+ tel +"' where id = '"+ id +"'";
		                    
		  PreparedStatement statement = connectDb.connec().prepareStatement(sqlq);
			
			statement.executeUpdate(sqlq);
		 
		
		    System.out.println("Your informations are successfully updated");

		
	}
	
	
	//Find user 
		
        public void findUserById () throws SQLException {
	    Scanner scanner = new Scanner(System.in);
		
		System.out.println("Enter the User ID to Update :");
		
		long idScan = scanner.nextLong();
		
		
		
	
		
		String sql2 = "select * from user where id = '"+ idScan +"'";
		
		java.sql.Statement stm2 = connectDb.connec().createStatement();
		
		ResultSet res1 = stm2.executeQuery(sql2);
		
		while(res1.next()) {
			
			System.out.println("Your Informations are : " + res1.getLong("id")+" "+res1.getString("first_name")+" "+res1.getString("last_name")+" "+res1.getString("email")+" "+res1.getString("phone"));
			
		}
		}
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
}

