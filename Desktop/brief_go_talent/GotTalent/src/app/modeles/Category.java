package app.modeles;


	public class Category {
		private long id;
		private String name ;
		
		
		public Category() {
			super();
		}
		public Category(long id, String name) {
			super();
			this.id = id;
			this.name = name;
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		

	}

