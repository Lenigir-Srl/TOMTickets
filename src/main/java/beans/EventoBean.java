import java.io.Serializable;

// The schema for the "Eventi" table is the following
// - titolo VARCHAR(50) PRIMARY KEY
// - sottotitolo VARCHAR(50)
// - descrizione VARCHAR(300)
// - tipologiaEvento VARCHAR(30)
// - luogo VARCHAR(30)
// - data DATE
// - ora TIME
// - timage BLOB
// - tipologiaBiglietti VARCHAR(30)
// - prezzo REAL
// - sconto REAL
// - numeroClick INT
//
public class EventoBean implements Serializable {
    
    private String titolo;
    private String sottotitolo;
    private String descrizione;
    private TipologiaEventoEnum tipologia;
    private LuogoEnum luogo;
    private String data;
    private String ora;
    private byte[] image;
    private TipologiaBigliettiEnum tipologiaBiglietti;
    private float prezzo;
    private float sconto;
    private int numeroClick;

    // Empty constructor
    public EventoBean() {}

    public EventoBean(String titolo, String sottotitolo, String descrizione,
                      TipologiaEventoEnum tipologia, LuogoEnum luogo,
                      String data, String ora, byte[] image,
                      TipologiaBigliettiEnum tipologiaBiglietti,
                      float prezzo, float sconto, int numeroClick) {

        this.titolo = titolo;
        this.sottotitolo = sottotitolo;
        this.descrizione = descrizione;
        this.tipologia = tipologia;
        this.luogo = luogo;
        this.data = data;
        this.ora = ora;
        this.image = image;
        this.tipologiaBiglietti = tipologiaBiglietti;
        this.prezzo = prezzo;
        this.sconto = sconto;
        this.numeroClick = numeroClick;
    }

    // Getter e Setter per l'attributo 'titolo'
    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    // Getter e Setter per l'attributo 'sottotitolo'
    public String getSottotitolo() {
        return sottotitolo;
    }

    public void setSottotitolo(String sottotitolo) {
        this.sottotitolo = sottotitolo;
    }

    // Getter e Setter per l'attributo 'descrizione'
    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    // Getter e Setter per l'attributo 'tipologia'
    public TipologiaEventoEnum getTipologia() {
        return tipologia;
    }

    public void setTipologia(TipologiaEventoEnum tipologia) {
        this.tipologia = tipologia;
    }

    // Getter e Setter per l'attributo 'luogo'
    public LuogoEnum getLuogo() {
        return luogo;
    }

    public void setLuogo(LuogoEnum luogo) {
        this.luogo = luogo;
    }

    // Getter e Setter per l'attributo 'data'
    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    // Getter e Setter per l'attributo 'ora'
    public String getOra() {
        return ora;
    }

    public void setOra(String ora) {
        this.ora = ora;
    }

    // Getter e Setter per l'attributo 'image'
    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    // Getter e Setter per l'attributo 'tipologiaBiglietti'
    public TipologiaBigliettiEnum getTipologiaBiglietti() {
        return tipologiaBiglietti;
    }

    public void setTipologiaBiglietti(TipologiaBigliettiEnum tipologiaBiglietti) {
        this.tipologiaBiglietti = tipologiaBiglietti;
    }

    // Getter e Setter per l'attributo 'prezzo'
    public float getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(float prezzo) {
        this.prezzo = prezzo;
    }

    // Getter e Setter per l'attributo 'sconto'
    public float getSconto() {
        return sconto;
    }

    public void setSconto(float sconto) {
        this.sconto = sconto;
    }

    // Getter e Setter per l'attributo 'numeroClick'
    public int getNumeroClick() {
        return numeroClick;
    }

    public void setNumeroClick(int numeroClick) {
        this.numeroClick = numeroClick;
    }
    
    public String toString() {
        
        StringBuilder sb = new StringBuilder();
        sb.append("Titolo: ").append(titolo).append("\n");
        sb.append("Sottotitolo: ").append(sottotitolo).append("\n");
        sb.append("Descrizione: ").append(descrizione).append("\n");
        sb.append("Tipologia: ").append(tipologia).append("\n");
        sb.append("Luogo: ").append(luogo).append("\n");
        sb.append("Data: ").append(data).append("\n");
        sb.append("Ora: ").append(ora).append("\n");
        sb.append("Tipologia Biglietti: ").append(tipologiaBiglietti).append("\n");
        sb.append("Prezzo: ").append(prezzo).append("\n");
        sb.append("Sconto: ").append(sconto).append("\n");
        sb.append("Numero Click: ").append(numeroClick).append("\n");
        return sb.toString();
    }
}
