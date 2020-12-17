package app.modeles;

public class participation {
	
	
	public class Participation {
		private int id;
		private String description;
		private String show_startime;
		private String show_end;
		private String attached;
		private boolean is_accepted;
		
		public Participation() {
			super();
		}
		public Participation(int id, String description, String show_startime, String show_end, String attached,
				boolean is_accepted) {
			super();
			this.id = id;
			this.description = description;
			this.show_startime = show_startime;
			this.show_end = show_end;
			this.attached = attached;
			this.is_accepted = is_accepted;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getShow_startime() {
			return show_startime;
		}
		public void setShow_startime(String show_startime) {
			this.show_startime = show_startime;
		}
		public String getShow_end() {
			return show_end;
		}
		public void setShow_end(String show_end) {
			this.show_end = show_end;
		}
		public String getAttached() {
			return attached;
		}
		public void setAttached(String attached) {
			this.attached = attached;
		}
		public boolean isIs_accepted() {
			return is_accepted;
		}
		public void setIs_accepted(boolean is_accepted) {
			this.is_accepted = is_accepted;
		}

	}

}
