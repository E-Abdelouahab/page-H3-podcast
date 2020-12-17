package app.modeles;


	public class AdminSession {
		  private int id;	
		  private String is_connected;
		  
		public AdminSession() {
			super();
		}
		public AdminSession(int id, String is_connected) {
			super();
			this.id = id;
			this.is_connected = is_connected;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getIs_connected() {
			return is_connected;
		}
		public void setIs_connected(String is_connected) {
			this.is_connected = is_connected;
		}
		  
		  
		}

