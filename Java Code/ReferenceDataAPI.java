import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ReferenceDataAPI {

	public String call(String url, String username, String password) {

		StringBuilder stringBuilder = new StringBuilder();
		try {
			String apiUrl = url + "?username=" + username + "&password="
					+ password;
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
		ReferenceDataAPI referenceDataAPI = new ReferenceDataAPI();
		String url = "https://www.gocanvas.com/apiv2/reference_datas";
		String username = "test@test.com";
		String password = "test123";
		String outputXml = referenceDataAPI.call(url, username, password);
		System.out.println("xml response: " + outputXml);
	}
}
