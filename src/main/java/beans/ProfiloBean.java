import java.io.Serializable;

// The schema for the "Profili" table is the following
// - username VARCHAR(30) PRIMARY KEY
// - password VARCHAR(30)
// - nome VARCHAR(30)
// - cognome VARCHAR(30)
// - birthDate DATE
// - email VARCHAR(30)
// - phoneNumber VARCHAR(10)
// - numeroAcquisti INT
// - isAdmin BOOLEAN
//
public class ProfiloBean implements Serializable {

    private String nome;
    private String cognome;
    private String birthDate;
    private String email;
    private String phoneNumber;
    private String username;
    private String password;
    private Integer numeroAcquisti;
    private boolean isAdmin;

    // Empty constructor
    ProfiloBean() {}

    ProfiloBean(String nome, String cognome, String birthDate,
                String email, String phoneNumber,
                String username, String password,
                int numeroAcquisti, boolean isAdmin) {

        this.nome = nome;
        this.cognome = cognome;
        this.birthDate = birthDate;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.username = username;
        this.password = password;
        this.numeroAcquisti = numeroAcquisti;
        this.isAdmin = isAdmin;
    }

    protected String getNome() {
        return this.nome;
    }

    protected void setNome(String arg) {
        this.nome = arg;
    }

    protected String getCognome() {
        return this.cognome;
    }

    protected void setCognome(String arg) {
        this.cognome = arg;
    }

    protected String getBirthDate() {
        return this.birthDate;
    }

    protected void setBirthDate(String arg) {
        this.birthDate = arg;
    }

    protected String getEmail() {
        return this.email;
    }

    protected void setEmail(String arg) {
        this.email = arg;
    }

    protected String getPhoneNumber() {
        return this.phoneNumber;
    }

    protected void setPhoneNumber(String arg) {
        this.phoneNumber = arg;
    }

    protected String getUsername() {
        return this.username;
    }
    protected void setUsername(String arg) {
        this.username = arg;
    }

    protected String getPassword() {
        return this.password;
    }

    protected void setPassword(String arg) {
        this.password = arg;
    }

    protected Integer getAcquisti() {
        return this.numeroAcquisti;
    }

    protected void setAcquisti(Integer arg) {
        this.numeroAcquisti = arg;
    }

    protected boolean isAdmin() {
        return this.isAdmin;
    }

    protected void setAdmin(boolean arg) {
        this.isAdmin = arg;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Nome: ").append(nome).append("\n");
        sb.append("Cognome: ").append(cognome).append("\n");
        sb.append("Data di nascita: ").append(birthDate).append("\n");
        sb.append("Email: ").append(email).append("\n");
        sb.append("Numero di telefono: ").append(phoneNumber).append("\n");
        sb.append("Username: ").append(username).append("\n");
        sb.append("Password: ").append(password).append("\n");
        sb.append("Numero di acquisti: ").append(numeroAcquisti).append("\n");
        sb.append("Admin: ").append(isAdmin).append("\n");
        return sb.toString();
    }
}
