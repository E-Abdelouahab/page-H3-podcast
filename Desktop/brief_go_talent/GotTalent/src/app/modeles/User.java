package app.modeles;

public class User {
private long id;
private String firstname;
private String lastname;
private String email;
private String tel;

public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getTel() {
	return tel;
}
public void setTel(String tel) {
	this.tel = tel;
}
@Override
public String toString() {
	return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email + ", tel="
			+ tel + "]";
}
public User(long id,String firstname,String lastname,String email,String tel) {
	this.id=id;
	this.firstname=firstname;
	this.lastname=lastname;
	this.email=email;
	this.tel=tel;
	
}
public  User() {

}}


