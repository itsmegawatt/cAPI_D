import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class CSVMetaDataAPI {

	public String call(String url, String username, String password,
			String form_Id, String begin_second, String end_second) {

		StringBuilder stringBuilder = new StringBuilder();
		try {
			String apiUrl = url + "?username=" + username + "&password="
					+ password + "&form_id=" + form_Id + "&begin_second="
					+ begin_second + "&end_second=" + end_second;
			URL obj = new URL(apiUrl);
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();
			conn.setDoOutput(true);
			conn.setRequestMethod("GET");
			BufferedReader br = new BufferedReader(new InputStreamReader(
					conn.getInputStream()));
			String l = null;
			while ((l = br.readLine()) != null) {
				stringBuilder.append(l);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return stringBuilder.toString();
	}

	public static void main(String[] args) {
		CSVMetaDataAPI csvMetaDataAPI = new CSVMetaDataAPI();
		String url = "https://www.gocanvas.com/apiv2/csv_meta_datas.xml";
		String username = "test@test.com";
		String password = "test123";
		String form_Id = "1";
		String begin_second = "962461752";
		String end_second = "1593613752";
		String outputXml = csvMetaDataAPI.call(url, username, password,
				form_Id, begin_second, end_second);
		System.out.println("xml response: " + outputXml);
	}
}
