import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.Part;
import java.io.*;

// This class provides the following methods:
// - int CreaEvento(EventoBean, Connection)
// - int EliminaEvento(EventoBean, Connection)
// - List<EventoBean> GetEventi(Connection)
// - List<EventoBean> GetEventi(Connection, TipologiaEventoEnum)
// - List<EventoBean> GetMostClicked(Connection)
// - EventoBean GetEvento(String titolo, Connection)
// - List<EventoBean> GetSconti(Connection)
// - boolean EventoExists(EventoBean, connection)
// - void IncreaseClickNumber(EventoBean, Connection)
// - void salvaImmagine(Part)
// - void eliminaImmagine(EventoBean)
//
public class EventoDAO {

    // Adds an Evento in the DB
    //
    // Arguments:
    // - EventoBean
    // - Connection
    //
    // Return value
    // The number of rows added
    //
    // Throws:
    // SQLException
    public static int AggiungiEvento(EventoBean evento, Connection con) throws SQLException {
        
        try {

            if (EventoExists(evento, con)) return 0;
            
            String query = "INSERT INTO Eventi VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            PreparedStatement ps = con.prepareStatement(query);

            ps.setString(1, evento.getTitolo());
            ps.setString(2, evento.getSottotitolo());
            ps.setString(3, evento.getDescrizione());
            ps.setString(4, evento.getTipologia().toString());
            ps.setString(5, evento.getLuogo().toString());
            ps.setString(6, evento.getData());
            ps.setString(7, evento.getOra());
            ps.setString(8, evento.getImage());
            ps.setString(9, evento.getTipologiaBiglietti().toString());
            ps.setDouble(10, evento.getPrezzo());
            ps.setDouble(11, evento.getSconto());
            ps.setInt(12, evento.getNumeroClick());

            int rowsaffected = ps.executeUpdate();
            return rowsaffected;

        } catch (SQLException e) {
            throw new SQLException(e);
        }

    }

    // Deletes EventoBean from the DB
    // Arguments:
    // - EventoBean
    // - Connection
    //
    // Return value:
    // The number of rows affected by the change
    //
    // Throws:
    // SQLException
    public static int EliminaEvento(EventoBean evento, Connection con) throws SQLException {
       
        try {

            if (!EventoExists(evento, con)) return 0;
            
            String query = "DELETE FROM Eventi WHERE titolo=?";

            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, evento.getTitolo());

            int rowsaffected = ps.executeUpdate();

            return rowsaffected;

        } catch (SQLException e) {
            throw new SQLException(e);
        }
    }

    // Returns a List of all the events in the DB
    //
    // Arguments:
    // - Connection
    //
    // Return value:
    // A List<EventoBean> with all the profiles from the DB
    //
    // Throws:
    // SQLException
    public static List<EventoBean> GetEventi(Connection con) throws SQLException {

        List<EventoBean> eventi = new ArrayList<>(); 

        try {
       
            Statement stm = con.createStatement();
            String query = "SELECT * FROM Eventi";
            ResultSet rs = stm.executeQuery(query);;
            
            while (rs.next()) {
                
                EventoBean evento = new EventoBean();
                
                evento.setTitolo(rs.getString("titolo"));
                evento.setSottotitolo(rs.getString("sottotitolo"));
                evento.setDescrizione(rs.getString("descrizione"));
                evento.setTipologia(TipologiaEventoEnum.valueOf(rs.getString("tipologiaEvento")));
                evento.setLuogo(LuogoEnum.valueOf(rs.getString("luogo")));
                evento.setData(rs.getString("data"));
                evento.setOra(rs.getString("ora"));
                evento.setImage(rs.getString("image"));
                evento.setTipologiaBiglietti(
                        TipologiaBigliettiEnum.valueOf(
                                rs.getString("tipologiaBiglietti")));
                evento.setPrezzo(rs.getFloat("prezzo"));
                evento.setSconto(rs.getFloat("sconto"));
                evento.setNumeroClick(rs.getInt("numeroClick"));

                eventi.add(evento);
            }

        }
        catch(SQLException e) {
            throw new SQLException(e);
        }
        
        return eventi;
    }
    
    // Returns a List of all the events in the DB matching
    // the given TipologiaEventoEnum
    //
    // Arguments:
    // - Connection
    // - TipologiaEventoEnum
    //
    // Return value:
    // A List<EventoBean> with all the profiles from the DB
    //
    // Throws:
    // SQLException
    public static List<EventoBean> GetEventiTipologia(Connection con, TipologiaEventoEnum tipologia) throws SQLException {

        List<EventoBean> eventi = new ArrayList<>(); 

        try {
       
            String query = "SELECT * FROM Eventi WHERE tipologiaEvento=?";
            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, tipologia.toString());
            
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                
                EventoBean evento = new EventoBean();
                
                evento.setTitolo(rs.getString("titolo"));
                evento.setSottotitolo(rs.getString("sottotitolo"));
                evento.setDescrizione(rs.getString("descrizione"));
                evento.setTipologia(TipologiaEventoEnum.valueOf(rs.getString("tipologiaEvento")));
                evento.setLuogo(LuogoEnum.valueOf(rs.getString("luogo")));
                evento.setData(rs.getString("data"));
                evento.setOra(rs.getString("ora"));
                evento.setImage(rs.getString("image"));
                evento.setTipologiaBiglietti(
                        TipologiaBigliettiEnum.valueOf(
                                rs.getString("tipologiaBiglietti")));
                evento.setPrezzo(rs.getFloat("prezzo"));
                evento.setSconto(rs.getFloat("sconto"));
                evento.setNumeroClick(rs.getInt("numeroClick"));

                eventi.add(evento);
            }

        }
        catch(SQLException e) {
            throw new SQLException(e);
        }
        
        return eventi;
    }

    // Returns a List of all the 3 most clicked events in the DB
    //
    // Arguments:
    // - Connection
    //
    // Return value:
    // A List<EventoBean> with all the profiles from the DB
    //
    // Throws:
    // SQLException
    public static List<EventoBean> GetMostClicked(Connection con) throws SQLException {

        List<EventoBean> eventi = new ArrayList<>(); 

        try {
       
            Statement stm = con.createStatement();
            String query = "SELECT * FROM Eventi ORDER BY numeroClick DESC FETCH FIRST 3 ROWS ONLY";
            ResultSet rs = stm.executeQuery(query);;
            
            while (rs.next()) {
                
                EventoBean evento = new EventoBean();
                
                evento.setTitolo(rs.getString("titolo"));
                evento.setSottotitolo(rs.getString("sottotitolo"));
                evento.setDescrizione(rs.getString("descrizione"));
                evento.setTipologia(TipologiaEventoEnum.valueOf(rs.getString("tipologiaEvento")));
                evento.setLuogo(LuogoEnum.valueOf(rs.getString("luogo")));
                evento.setData(rs.getString("data"));
                evento.setOra(rs.getString("ora"));
                evento.setImage(rs.getString("image"));
                evento.setTipologiaBiglietti(
                        TipologiaBigliettiEnum.valueOf(
                                rs.getString("tipologiaBiglietti")));
                evento.setPrezzo(rs.getFloat("prezzo"));
                evento.setSconto(rs.getFloat("sconto"));
                evento.setNumeroClick(rs.getInt("numeroClick"));

                eventi.add(evento);
            }

        }
        catch(SQLException e) {
            throw new SQLException(e);
        }
        
        return eventi;
    }

    // Returns an EventoBean from the DB with the given title
    //
    // Arguments:
    // - String title
    // - Connection
    //
    // Return value:
    // EventoBean
    //
    // Throws:
    // SQLException
    public static EventoBean GetEvento(String titolo, Connection con) throws SQLException {

        try {
       
            EventoBean evento = new EventoBean();
            
            String query = "SELECT * FROM Eventi WHERE titolo=?";
            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, titolo);
            
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                
                evento.setTitolo(rs.getString("titolo"));
                evento.setSottotitolo(rs.getString("sottotitolo"));
                evento.setDescrizione(rs.getString("descrizione"));
                evento.setTipologia(TipologiaEventoEnum.valueOf(rs.getString("tipologiaEvento")));
                evento.setLuogo(LuogoEnum.valueOf(rs.getString("luogo")));
                evento.setData(rs.getString("data"));
                evento.setOra(rs.getString("ora"));
                evento.setImage(rs.getString("image"));
                evento.setTipologiaBiglietti(
                        TipologiaBigliettiEnum.valueOf(
                                rs.getString("tipologiaBiglietti")));
                evento.setPrezzo(rs.getFloat("prezzo"));
                evento.setSconto(rs.getFloat("sconto"));
                evento.setNumeroClick(rs.getInt("numeroClick"));

            }
        
            return evento;

        }
        catch(SQLException e) {
            throw new SQLException(e);
        }
        
    }
    
    // Returns a List of all the events with a discount > 0 in the DB
    //
    // Arguments:
    // - Connection
    //
    // Return value:
    // A List<EventoBean>
    //
    // Throws:
    // SQLException
    public static List<EventoBean> GetSconti(Connection con) throws SQLException {

        List<EventoBean> eventi = new ArrayList<>(); 

        try {
       
            Statement stm = con.createStatement();
            String query = "SELECT * FROM Eventi WHERE sconto > 0";
            ResultSet rs = stm.executeQuery(query);;
            
            while (rs.next()) {
                
                EventoBean evento = new EventoBean();
                
                evento.setTitolo(rs.getString("titolo"));
                evento.setSottotitolo(rs.getString("sottotitolo"));
                evento.setDescrizione(rs.getString("descrizione"));
                evento.setTipologia(TipologiaEventoEnum.valueOf(rs.getString("tipologiaEvento")));
                evento.setLuogo(LuogoEnum.valueOf(rs.getString("luogo")));
                evento.setData(rs.getString("data"));
                evento.setOra(rs.getString("ora"));
                evento.setImage(rs.getString("image"));
                evento.setTipologiaBiglietti(
                        TipologiaBigliettiEnum.valueOf(
                                rs.getString("tipologiaBiglietti")));
                evento.setPrezzo(rs.getFloat("prezzo"));
                evento.setSconto(rs.getFloat("sconto"));
                evento.setNumeroClick(rs.getInt("numeroClick"));

                eventi.add(evento);
            }

        }
        catch(SQLException e) {
            throw new SQLException(e);
        }
        
        return eventi;
    }

    // Checks if and Evento already exists in the DB
    //
    // Arguments:
    // - EventoBean
    // - Connection
    //
    // Return value:
    // - true if the evento exists in the db
    // - false if the evento does not exist
    // Keep in mind that en Evento is defined by It's title
    //
    // Throws:
    // SQLException
    public static boolean EventoExists(EventoBean evento, Connection con) throws SQLException {

        try {

            String query = "SELECT titolo FROM Eventi WHERE titolo=?";

            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, evento.getTitolo());
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return true;
            } else {
                return false;
            }

        } catch (SQLException e) {
            throw new SQLException(e);
        }
    }

    // Deletes EventoBean from the DB
    // Arguments:
    // - EventoBean
    // - Connection
    //
    // Return value:
    // The number of rows affected by the change
    //
    // Throws:
    // SQLException
    public static int IncreaseClickNumber(EventoBean evento, Connection con) throws SQLException {
       
        try {

            if (!EventoExists(evento, con)) return 0;
            
            String query = "UPDATE Eventi SET numeroClick=? WHERE titolo=?";

            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, String.valueOf(evento.getNumeroClick() + 1));
            ps.setString(2, evento.getTitolo());

            int rowsaffected = ps.executeUpdate();

            return rowsaffected;

        } catch (SQLException e) {
            throw new SQLException(e);
        }
    }

    // Deletes the image of an EventoBean from the server
    //
    // Arguments:
    // - Part
    //
    // Throws:
    // IOException
    static void salvaImmagine(Part filePart, String path) throws IOException {
        
        final String fileName = getFileName(filePart);

        OutputStream out = null;
        InputStream filecontent = null;

        try {
            out = new FileOutputStream(new File(path + File.separator
                    + fileName));
            filecontent = filePart.getInputStream();

            int read = 0;
            final byte[] bytes = new byte[1024];

            while ((read = filecontent.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }

        } catch (FileNotFoundException fne) {

            throw new RuntimeException("Errore nel salvataggio dell'immagine", fne);
        } finally {
            if (out != null) {
                out.close();
            }
            if (filecontent != null) {
                filecontent.close();
            }
        }
    }

    // Utility function: get the file name from a part
    static String getFileName(final Part part) {
        final String partHeader = part.getHeader("content-disposition");
        for (String content : part.getHeader("content-disposition").split(";")) {
            if (content.trim().startsWith("filename")) {
                return content.substring(
                        content.indexOf('=') + 1).trim().replace("\"", "");
            }
        }
        return null;
    }

    static void EliminaImmagine(EventoBean evento, String path) throws IOException {
        File file = new File(path + File.separator + evento.getImage());
        if (!file.delete()) {
            throw new IOException("Errore nell'eliminazione dell'immagine");
        }
    }

}
