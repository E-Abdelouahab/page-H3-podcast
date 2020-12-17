package app.modeles;


	public class Admin  extends User{
		public Admin(long id, String firstname, String lastname, String email, String tel) {
			super(id, firstname, lastname, email, tel);
			// TODO Auto-generated constructor stub
		}
		private int id;
		private String role;
		public long getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getRole() {
			return role;
		}
		public void setRole(String role) {
			this.role = role;
		}
		
		

	}


