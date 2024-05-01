import java.io.Serializable;

//The purpose of this Bean is to manage the login attempt made by the user and the manager
//whilst keeping the webapp MVC compliant and thread safe.
//It retains two attributes called "username" and "password", both used to login into the webapp.

public class TentativoAccessoBean implements Serializable {
	
	private String username;	

	public String getUsername(){
		return this.username;
	}

	protected void setUsername(String arg){
		this.username = arg;
	}




	private String password;

	public String getPassword(){
		return this.password;
	}

	protected void setPassword(String arg){
		this.password = arg;
	}




	TentativoAccessoBean(){
                username = null;
                password = null;
        }

	TentativoAccessoBean(String username, String password){
		this.username = username;
		this.password = password;
	}

}
