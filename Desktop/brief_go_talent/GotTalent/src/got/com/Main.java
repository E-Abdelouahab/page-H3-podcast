package got.com;

import java.sql.SQLException;
import java.util.Scanner;

import DAO.Administrator;
import app.controller.UserController;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	
		
		/////////////////////////////////////
		
		while (true) {
			Scanner reader = new Scanner(System.in);
			Scanner reader2 = new Scanner(System.in);
			Scanner reader3 = new Scanner(System.in);
			System.out.println("1-Incription 2-modification de mon compte 3- ajouter un demande de participation  ");
			int choice = reader.nextInt();
			switch(choice){
			case 1:
			
				 {
					 UserController user = new UserController();
					 
					 try {
						user.AddUser();
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
		 			
				}
			case 2 :
				UserController user1 = new UserController();
				try {
					user1.updateUser();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
    			break;
			case 3 :
				UserController user3 = new UserController();
				
				try {
					user3.findUserById();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				
	 		
				
			
			
			
			}
		
			
		}
		
		
		
		
	}
	
	

}
// Abdel update 

/* public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stConnectio
		
	System.out.println(Administrator.findAllUsers());
	System.out.println(Administrator.adminConnect("0000","admin@admin.com"));
		
	} */

}

