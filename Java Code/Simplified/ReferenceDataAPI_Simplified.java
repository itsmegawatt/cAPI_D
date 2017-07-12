package Simplified;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ReferenceDataAPI_Simplified {
	public static void main(String[] args) {
		StringBuilder stringBuilder = new StringBuilder();
		try {
			String apiUrl = "https://www.gocanvas.com/apiv2/reference_datas?username=taukeerahmed.knmiet@gmail.com&password=abc123";
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
