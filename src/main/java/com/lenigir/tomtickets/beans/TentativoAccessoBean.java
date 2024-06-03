package com.lenigir.tomtickets.beans;
import java.io.Serializable;

//MVC compliant and Thread safe.
public class TentativoAccessoBean implements Serializable {
	
	private String username;	
	private String password;
        private boolean isValid;

	public TentativoAccessoBean(String username, String password) {
        this.username = username;
        this.password = password;
        this.isValid = false;
    }

    public String getUsername() {
		return this.username;
	}

	protected void setUsername(String arg) {
		this.username = arg;
	}

	public String getPassword() {
		return this.password;
	}

	protected void setPassword(String arg) {
		this.password = arg;
	}

    public boolean getValid() {
        return this.isValid;
    }

    public void setValid(boolean arg) {
        this.isValid = arg;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Username: ").append(username).append("\n");
        sb.append("Password: ").append(password).append("\n");
        sb.append("Validity: ").append(isValid).append("\n");
        return sb.toString();
    }

}
