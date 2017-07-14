package Simplified;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class CSVMetaDataAPI_Simplified {
	public static void main(String[] args) {
		StringBuilder stringBuilder = new StringBuilder();
		try {
			String apiUrl = "https://www.gocanvas.com/apiv2/csv_meta_datas.xml?username=test@test.com&password=test123&form_id=1&begin_second=962461752&end_second=1593613752";
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
		System.out.println("xml response: " + stringBuilder);
	}
}
