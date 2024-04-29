import java.io.Serializable;

//The purpose of this Bean is to manage all the Profile's attributes 
//(such as "name" or "password") within the webapp, whilst keeping it
//MVC compliant and Thread safe.

public class ProfileBean implements Serializable {
	
	private String name;	

	public String getName(){
		return this.name;
	}

	protected void setName(String arg){
		this.name = arg;
	}




	private String password;

	public String getPassword(){
		return this.password;
	}

	protected void setPassword(String arg){
		this.password = arg;
	}




	ProfileBean(){
                name = null;
                password = null;
        }

}
