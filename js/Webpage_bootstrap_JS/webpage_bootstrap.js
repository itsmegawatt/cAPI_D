// JavaScript Document
var changeToCurl = function() {

    document.getElementById('forms_api_code').innerHTML = '<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p class="api_header text-left">Forms API URL:</p><p class="code">https://www.gocanvas.com/apiv2/forms.xml</p><p class="api_header text-left">REST API Call Example:</p><p class="code">https://www.gocanvas.com/apiv2/forms.xml?username=test@test.com&password=test_password</p><p>&nbsp;</p><p class="api_header text-left">Resulting XML:</p><p class="code"><span class="text_turquoise">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span><br /><span class="text_turquoise">&lt;CanvasResult&gt;</span><br /><span class="text_turquoise">&lt;Forms&gt;</span><br /><span class="text_turquoise">&lt;Form Id="1" OriginatingLibraryTemplateId="" GUID="f6167220-a09d-11df-8e32-00242bb0cd70"&gt;</span><br /><span class="text_turquoise">&lt;Name&gt;</span>test form<span class="text_turquoise">&lt;/Name&gt;</span><br /><span class="text_turquoise">&lt;Status&gt;</span>published<span class="text_turquoise">&lt;/Status&gt;</span><br /><span class="text_turquoise">&lt;Version&gt;</span>1<span class="text_turquoise">&lt;/Version&gt;</span><br /><span class="text_turquoise">&lt;/Form&gt;</span></p>';
    
    document.getElementById('submissions_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>Submissions API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/submissions.xml</p> <p>REST API Call Example:</p> <p class="code">https://www.gocanvas.com/apiv2/forms.xml?username=test@test.com&password=test_password</p> <p>&nbsp;</p> <p>Resulting XML:</p> <p class="code"> <span class="text_turquoise">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span><br /> <span class="text_turquoise">&lt;CanvasResult&gt;</span><br /> <span class="text_turquoise">&lt;TotalPages&gt;</span>1<span class="text_turquoise">&lt;/TotalPages&gt;</span><br /> <span class="text_turquoise">&lt;Submissions&gt;</span><br /> <span class="text_turquoise">&lt;Submission Id="1" Department="Test Department"&gt;</span><br /> <span class="text_turquoise">&lt;UserName&gt;</span>test@test.com<span class="text_turquoise">&lt;/UserName&gt;</span><br /> <span class="text_turquoise">&lt;FirstName&gt;</span>Test<span class="text_turquoise">&lt;/FirstName&gt;</span><br /> <span class="text_turquoise">&lt;LastName&gt;</span>Tester<span class="text_turquoise">&lt;/LastName&gt;</span><br /> <span class="text_turquoise">&lt;ResponseID&gt;</span>258aaa53-77aa2-4e58-bb88-f404dd363fff3<span class="text_turquoise">&lt;/ResponseID&gt;</span><br /> <span class="text_turquoise">&lt;Date&gt;</span>2009.08.31 20:20:17<span class="text_turquoise">&lt;/Date&gt;</span><br /> <span class="text_turquoise">&lt;DeviceDate&gt;</span>2009.08.31 20:20:17<span class="text_turquoise">&lt;/DeviceDate&gt;</span><br /> <span class="text_turquoise">&lt;Form Id="1"&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>test form<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Status&gt;</span>published<span class="text_turquoise">&lt;/Status&gt;</span><br /> <span class="text_turquoise">&lt;Version&gt;</span>1<span class="text_turquoise">&lt;/Version&gt;</span><br /> <span class="text_turquoise">&lt;/Form&gt;</span><br /> <span class="text_turquoise">&lt;Sections&gt;</span><br /> <span class="text_turquoise">&lt;Section&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Main Info<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Sheets&gt;</span><br /> <span class="text_turquoise">&lt;Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Main Info<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Responses&gt;</span><br /> <span class="text_turquoise">&lt;Response id="8217"&gt;</span><br /> <span class="text_turquoise">&lt;label&gt;</span>First Name<span class="text_turquoise">&lt;/label&gt;</span><br /> <span class="text_turquoise">&lt;value&gt;</span>James<span class="text_turquoise">&lt;/value&gt;</span><br /> <span class="text_turquoise">&lt;type&gt;</span>Text Box<span class="text_turquoise">&lt;/type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;/Responses&gt;</span><br /> <span class="text_turquoise">&lt;/Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Date List<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;ResponseGroups&gt;</span><br /> <span class="text_turquoise">&lt;ResponseGroup&gt;</span><br /> <span class="text_turquoise">&lt;Response&gt;</span><br /> <span class="text_turquoise">&lt;Label&gt;</span>Date<span class="text_turquoise">&lt;/Label&gt;</span><br /> <span class="text_turquoise">&lt;Value&gt;</span>6/22/09<span class="text_turquoise">&lt;/Value&gt;</span><br /> <span class="text_turquoise">&lt;Type&gt;</span>Date<span class="text_turquoise">&lt;/Type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;Section&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Date Entry<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Sheets&gt;</span><br /> <span class="text_turquoise">&lt;Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Date<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Responses&gt;</span><br /> <span class="text_turquoise">&lt;Response&gt;</span><br /> <span class="text_turquoise">&lt;Label&gt;</span>Date<span class="text_turquoise">&lt;/Label&gt;</span><br /> <span class="text_turquoise">&lt;Value&gt;</span>06/22/09<span class="text_turquoise">&lt;/Value&gt;</span><br /> <span class="text_turquoise">&lt;Type&gt;</span>Date<span class="text_turquoise">&lt;/Type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;Response&gt;</span><br /> <span class="text_turquoise">&lt;Label&gt;</span>Click your track ball and select "Next" to enter a list of time entries.<span class="text_turquoise">&lt;/Label&gt;</span><br /> <span class="text_turquoise">&lt;Value&gt;</span><br /><span class="text_turquoise">&lt;/Value&gt;</span><br /> <span class="text_turquoise">&lt;Type&gt;</span>Static Text<span class="text_turquoise">&lt;/Type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;/Responses&gt;</span><br /> <span class="text_turquoise">&lt;/Sheet&gt;</span><br /> <span class="text_turquoise">&lt;/Sheets&gt;</span><br /> <span class="text_turquoise">&lt;/Section&gt;</span><br /> <span class="text_turquoise">&lt;/ResponseGroup&gt;</span><br /> <span class="text_turquoise">&lt;/ResponseGroups&gt;</span><br /> <span class="text_turquoise">&lt;/Sheet&gt;</span><br /> <span class="text_turquoise">&lt;/Sheets&gt;</span><br /> <span class="text_turquoise">&lt;/Section&gt;</span><br /> <span class="text_turquoise">&lt;/Sections&gt;</span><br /> <span class="text_turquoise">&lt;/Submission&gt;</span><br /><span class="text_turquoise">&lt;/Submissions&gt;</span><br /><span class="text_turquoise">&lt;/CanvasResult&gt;</span><br />';

    document.getElementById('images_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Images API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/images.xml</p> <p>REST API Call Example:</p> <p class="code">https://www.gocanvas.com/apiv2/images.xml?image_id=1&username=test@test.com&password=test</p> <p>&nbsp;</p> <p>Resulting image:</p><br><center> <p class="code"> <img src="images/image-api-result.png" /> </p></center>';

    document.getElementById('reference_data_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Reference Data API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/reference_datas</p> <p>REST API Call Example:</p> <p class="code">https://www.gocanvas.com/apiv2/reference_datas?username=test@test.com&password=test_password</p> <p>&nbsp;</p> <p>Post Payload:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" Department="Test Department"&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Data1Column1&lt;/v&gt;&lt;v&gt;Data1Column2&lt;/v&gt;&lt;v&gt;Data1Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Data2Column1&lt;/v&gt;&lt;v&gt;Data2Column2&lt;/v&gt;&lt;v&gt;Data2Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;CanvasResult&gt;<br /> &lt;/CanvasResult&gt;<br /> </p> <p>Post Payload to divide data by into user groups defined in Column1:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" UserGroupColumn ="Column1&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Group1&lt;/v&gt;&lt;v&gt;Data1Column2&lt;/v&gt;&lt;v&gt;Data1Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data2Column2&lt;/v&gt;&lt;v&gt;Data2Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p> <p>Post Payload to replace the data in Group2:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" Action="Update" UserGroup =" Group2&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data3Column2&lt;/v&gt;&lt;v&gt;Data3Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data4Column2&lt;/v&gt;&lt;v&gt;Data4Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p> <p>Post Payload to append new data to existing or new user groups:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" Action="Append"&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data5Column2&lt;/v&gt;&lt;v&gt;Data5Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Group3&lt;/v&gt;&lt;v&gt;Data6Column2&lt;/v&gt;&lt;v&gt;Data6Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p>';

    document.getElementById('csv_meta_data_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>CSV Meta Data API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/csv_meta_datas.xml</p> <p>https://www.gocanvas.com/apiv2/csv_meta_datas.xml</p> <p class="code">https://www.gocanvas.com/apiv2/csv_meta_datas.xml?username=test@test.com&password=test_password&form_id=1&begin_second=962461752&end_second=1593613752</p> <p>&nbsp;</p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;CanvasResult&gt;<br /> &lt;CSVMetaData&gt;<br /> &lt;Form Id="1" OriginatingLibraryTemplateId="" GUID="f6167220-a09d-11df-8e32- 00242bb0cd70"&gt;<br /> &lt;Name&gt;test form&lt;/Name&gt;<br /> &lt;Status&gt;retired&lt;/Status&gt;<br /> &lt;Version&gt;1&lt;/Version&gt;<br /> &lt;SubmissionCount&gt;1&lt;/SubmissionCount&gt;<br /> &lt;/Form&gt;<br /> &lt;Form Id="2" OriginatingLibraryTemplateId="" GUID="f6167220-a09d-11df-8e32- 00242bb0cd70"&gt;<br /> &lt;Name&gt;second form&lt;/Name&gt;<br /> &lt;Status&gt;published&lt;/Status&gt;<br /> &lt;Version&gt;2&lt;/Version&gt;<br /> &lt;SubmissionCount&gt;5&lt;/SubmissionCount&gt;<br /> &lt;/Form&gt;<br /> &lt;/CSVMetaData&gt;<br /> &lt;/CanvasResult&gt;<br /> </p>';

    document.getElementById('csv_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>CSV API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/csv.xml</p> <p>REST API Call Example:</p> <p class="code">https://www.gocanvas.com/apiv2/csv.xml?username=test@test.com&password=test_password&form_id=1&begin_second=962461752&end_second=1593613752</p> <p>&nbsp;</p> <p>Resulting image:</p> <p class="code"> "Start Date","End Date","Export App Name","Username","User Last Name","User First Name","Response ID","Response Date/Time","Device Date/Time","Submission Form Name","Submission Form Version"<br /><br /> 2000-07-26 00:00:00","2020-07-26 23:59:00","Form Name","test@test.com","Test","User","B9E3AB25-EAE3-4A55-9136-E7CC921ED01E","07/26/2011 15:04:29","07/26/2011 15:04:09","Form Name" </p>';

    document.getElementById('dispatch_items_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Reference Data API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/dispatch_items</p> <p>REST API Call Example:</p> <p class="code">https://www.gocanvas.com/apiv2/csv.xml?username=test@test.com&password=test_password&form_id=1&begin_second=962461752&end_second=1593613752</p> <p>&nbsp;</p> <p>Post Payload:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;List&gt;</br /> &lt;DI FormName="Simpsons App" Description="#1 item" User="homer@mailinator.com"<br /> ScheduleAt="01/23/2015 09:15" Department="Test Department"&gt;</br /> &lt;DIEntry Label="first name" Value="Homer"/&gt;</br /> &lt;DIEntry Label="last name" Value="Simpson"/&gt;</br /> &lt;/DI&gt;</br /> &lt;DI FormName=" Simpsons App"&gt;</br /> &lt;DIEntry Label="first name" Value="Marge"/&gt;</br /> &lt;DIEntry Label="age" Value="35"/&gt;</br /> &lt;/DI&gt;</br /> &lt;/List&gt;</br /> </p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;CanvasResult&gt;</br /> &lt;/CanvasResult&gt;</br /> </p> <p>Post Payload with Dispatch List:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;List&gt;</br /> &lt;DI FormName="Your App" Description="1st item" User="myemail@email.com"&gt;</br /> &lt;DIEntry Label="First Label" Value="1st value"/&gt;</br /> &lt;DIEntry Label="Second Label" Value="2rd value"/&gt;</br /> &lt;DIListItems&gt;</br /> &lt;DIListItem&gt;</br /> &lt;DIEntries&gt;</br /> &lt;DIEntry Label="Name" Value="Tony Stark"/&gt;</br /> &lt;DIEntry Label="Nick Name" Value="Iron Man"/&gt;</br /> &lt;DIEntry Label="Occupation" Value="Super Hero"/&gt;</br /> &lt;/DIEntries&gt;</br /> &lt;/DIListItem&gt;</br /> &lt;DIListItem&gt;</br /> &lt;DIEntries&gt;</br /> &lt;DIEntry Label="Name" Value="Bruce Banner"/&gt;</br /> &lt;DIEntry Label="Nick Name" Value="Hulk"/&gt;</br /> &lt;DIEntry Label="Occupation" Value="Super Hero"/&gt;</br /> &lt;/DIEntries&gt;</br /> &lt;/DIListItem&gt;</br /> &lt;/DIListItems&gt;</br /> &lt;/DI&gt;</br /> &lt;/List&gt;</br /> </p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;CanvasResult&gt;</br /> &lt;/CanvasResult&gt;</br /> </p>';

    document.getElementById('submission_push_notifications_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>For any given submission, Canvas will send the submission GUID, the name, ID, and guid of your<br />form, and will optionally include a tag that you define (see the "Setting Up" section below). This will<br />be contained within an XML document as the body of the HTTP POST. Here\'s an example:</p> <p class="code"> &lt;?xml version="1.0" encoding="UTF-8"?&gt;<br /> &lt;submission_notification&gt;<br /> &lt;form&gt;<br /> &lt;id type="integer"&gt;1&lt;/id&gt;<br /> &lt;name&gt;FORM_NAME&lt;/name&gt;<br /> &lt;guid&gt;FORM_GUID&lt;/guid&gt;<br /> &lt;tag&gt;Your Tag&lt;/tag&gt;<br /> &lt;/form&gt;<br /> &lt;submission&gt;<br /> &lt;guid&gt;SUBMISSION_GUID&lt;/guid&gt;<br /> &lt;/submission&gt;<br /> &lt;/ submission_notification &gt;<br /> </p>';

    document.getElementById('error_codes_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Example of an invalid webservice invocation (missing the required "id" parameter):</p> <p class="code">https://www.gocanvas.com/apiv2/images.xml?username=test@gocanvas.com@password=test</p> <p>Result:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt; &lt;CanvasResult&gt; &lt;Error&gt; &lt;ErrorCode&gt;10&lt;/ErrorCode&gt; &lt;Description&gt;Required parameter is missing&lt;/Description&gt; &lt;/Error&gt; &lt;/CanvasResult&gt;</p>';

};

var changeToJava = function() {
    var javaCodeFormAPI = '<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.BufferedReader;</span><br> \
<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.InputStreamReader;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.HttpURLConnection;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.URL;</span><br><br>\
<span class="text_red">public class &nbsp;&nbsp;</span> FormAPIForWebpage {<br>\
	<span class="text_red">public static void &nbsp;&nbsp;</span> main(String[] args) {<br>\
		StringBuilder stringBuilder = <span class="text_red">&nbsp; new &nbsp;</span> StringBuilder();<br>\
		<span class="text_red">try</span> {<br>\
			String apiUrl = URLEncoder.encode(<span class="text_turquoise">"https://www.gocanvas.com/apiv2/forms.xml?username=test@test.com&password=test123","UTF-8"</span>);<br>\
			URL obj = <span class="text_red">new</span> URL(apiUrl);<br>\
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();<br>\
			conn.setDoOutput(<span class="text_red">true</span>);<br>\
			conn.setRequestMethod(<span class="text_turquoise">"GET"</span>);<br>\
			BufferedReader br = <span class="text_red">new</span> BufferedReader(<span class="text_red">new</span> InputStreamReader(<br>\
					conn.getInputStream()));<br>\
			String l = <span class="text_red">null</span>;<br>\
			<span class="text_red">while</span> ((l = br.readLine()) != <span class="text_red">null</span>) {<br>\
				stringBuilder.append(l);<br>\
			}<br>\
		} <span class="text_red">catch</span> (Exception e) {<br>\
			e.printStackTrace();<br>\
		}<br>\
	}<br>\
}';
    //var xmlResponse = '<?xml version="1.0" encoding="UTF-8"?><CanvasResult> <Forms>      <Form Id="1982604" OriginatingLibraryTemplateId="" GUID="48f7a682-4c2f-11e7-b109-0ecd91be6c3b">        <Name>*Test Crisis Manual</Name>        <Status>published</Status>        <Version>4</Version>      </Form>      <Form Id="1942030" OriginatingLibraryTemplateId="" GUID="39949c38-24d2-11e7-b1c7-0e77fa7675bf">        <Name>16MAYTEST</Name>        <Status>retired</Status>        <Version>1</Version>      </Form>      <Form Id="1964902" OriginatingLibraryTemplateId="" GUID="c9a47bac-d9a2-11e6-b5d1-0ecd91be6c3b">        <Name>APEX - Site Inspection</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1967523" OriginatingLibraryTemplateId="" GUID="c9a47bac-d9a2-11e6-b5d1-0ecd91be6c3b">        <Name>APEX - Site Inspection</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1903305" OriginatingLibraryTemplateId="" GUID="39949c38-24d2-11e7-b1c7-0e77fa7675bf">        <Name>App Build</Name>        <Status>published</Status>        <Version>2</Version>      </Form>      <Form Id="1977684" OriginatingLibraryTemplateId="" GUID="5666cf6a-a071-11e6-be89-0e77fa7675bf">        <Name>Binding Estimate of Cost (Karen Miller)</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1967575" OriginatingLibraryTemplateId="" GUID="b8b0e2aa-eee6-11e6-98e1-0e77fa7675bf">        <Name>Butterfly Diagram</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1923512" OriginatingLibraryTemplateId="" GUID="56c6c0dc-30b3-11e7-a312-1293810c8c83">        <Name>Calling Observation</Name>        <Status>published</Status>        <Version>2</Version>      </Form>      <Form Id="1906346" OriginatingLibraryTemplateId="" GUID="45a0f7e2-2671-11e7-9e32-1293810c8c83">        <Name>Country Risk Report</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1973046" OriginatingLibraryTemplateId="" GUID="48f7a682-4c2f-11e7-b109-0ecd91be6c3b">        <Name>Crisis Manual</Name>        <Status>published</Status>        <Version>23</Version>      </Form>      <Form Id="1972945" OriginatingLibraryTemplateId="" GUID="48f7a682-4c2f-11e7-b109-0ecd91be6c3b">        <Name>Crisis Manual - Copy</Name>        <Status>published</Status>        <Version>3</Version>      </Form>      <Form Id="1972979" OriginatingLibraryTemplateId="" GUID="48f7a682-4c2f-11e7-b109-0ecd91be6c3b">        <Name>Crisis Manual - Copy (2)</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1923501" OriginatingLibraryTemplateId="" GUID="370499ee-30a0-11e7-bc7d-12c58daff533">        <Name>Customer Experience Observation</Name>        <Status>published</Status>        <Version>3</Version>      </Form>      <Form Id="1904553" OriginatingLibraryTemplateId="" GUID="d7474168-24e3-11e7-813d-0ecd91be6c3b">        <Name>DRIVER&apos;S VEHICLE INSPECTION REPORT - TANKER</Name>        <Status>published</Status>        <Version>3</Version>      </Form>      <Form Id="1921722" OriginatingLibraryTemplateId="" GUID="02777a8e-1633-11e7-b3fc-12c58daff533">        <Name>DuPont Refrigeration Service Work Record (revision work)</Name>        <Status>published</Status>        <Version>7</Version>      </Form>      <Form Id="1961917" OriginatingLibraryTemplateId="" GUID="9486c5be-25f7-11e7-8f1f-0ecd91be6c3b">        <Name>EJM Pipe Weekly Report Form (Custom)</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1824884" OriginatingLibraryTemplateId="" GUID="67c8a336-f815-11e6-8a36-0a6b7ca77f39">        <Name>Employee Report</Name>        <Status>published</Status>        <Version>2</Version>      </Form>      <Form Id="1984454" OriginatingLibraryTemplateId="" GUID="594373a0-a12f-11e6-bcbf-0e77fa7675bf">        <Name>Estimated Cost of Services (PA)</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1903302" OriginatingLibraryTemplateId="" GUID="7264e272-24df-11e7-ab93-12c58daff533">        <Name>Field Service Report</Name>        <Status>published</Status>        <Version>5</Version>      </Form>      <Form Id="1913724" OriginatingLibraryTemplateId="" GUID="f3d0cf66-0f17-11e7-a335-0e77fa7675bf">        <Name>Final Agreement</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1904755" OriginatingLibraryTemplateId="" GUID="697dbd56-25b0-11e7-9825-0a6b7ca77f39">        <Name>Hot Work Permit</Name>        <Status>published</Status>        <Version>9</Version>      </Form>      <Form Id="1906288" OriginatingLibraryTemplateId="" GUID="9023a504-2661-11e7-9ef8-0e77fa7675bf">        <Name>IGU Measure Sheet</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1892305" OriginatingLibraryTemplateId="" GUID="0f616b56-f7ed-11e6-8426-0e77fa7675bf">        <Name>ISRO Astronauts Sheet</Name>        <Status>published</Status>        <Version>2</Version>      </Form>      <Form Id="1904617" OriginatingLibraryTemplateId="" GUID="d86a4168-2596-11e7-b36d-1293810c8c83">        <Name>IST In-Take Form</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1975653" OriginatingLibraryTemplateId="" GUID="4b0f73aa-9c8a-11e6-8f73-1293810c8c83">        <Name>Important Notice to Consumers - Ishman</Name>        <Status>pending</Status>        <Version>2</Version>      </Form>      <Form Id="1904584" OriginatingLibraryTemplateId="" GUID="39a677a8-2592-11e7-a103-1293810c8c83">        <Name>Invoice</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1911199" OriginatingLibraryTemplateId="" GUID="6c6a36d2-28fa-11e7-9e43-1293810c8c83">        <Name>Janitorial Inspection Form</Name>        <Status>published</Status>        <Version>3</Version>      </Form>      <Form Id="1906838" OriginatingLibraryTemplateId="" GUID="ab01ffbc-26af-11e7-b7f1-0e77fa7675bf">        <Name>Janitorial Inspection Form AMFacility</Name>        <Status>new</Status>        <Version>1</Version>      </Form>      <Form Id="1934783" OriginatingLibraryTemplateId="" GUID="a64648ba-36d7-11e7-86ef-0a6b7ca77f39">        <Name>Light Vehicle Hoist Inspection</Name>        <Status>published</Status>        <Version>3</Version>      </Form>      <Form Id="1977682" OriginatingLibraryTemplateId="" GUID="1b57509c-a072-11e6-9f49-12c58daff533">        <Name>Move Execution Detail Sheet</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1958040" OriginatingLibraryTemplateId="" GUID="935cc22a-3677-11e7-98b9-0e77fa7675bf">        <Name>Mr Roadworthy Tax Invoice</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1823104" OriginatingLibraryTemplateId="496995" GUID="24f00bdc-f7eb-11e6-b288-0a535f4e0dd5">        <Name>New to Canvas? Try this app first!</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1892533" OriginatingLibraryTemplateId="" GUID="904f6d82-f7b4-11e6-8c2d-12c58daff533">        <Name>Plastic Cage Travel Card</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1967543" OriginatingLibraryTemplateId="" GUID="f0ba69d8-454d-11e7-9e91-12c58daff533">        <Name>Proposal</Name>        <Status>published</Status>        <Version>2</Version>      </Form>      <Form Id="1916188" OriginatingLibraryTemplateId="" GUID="dde717da-d194-11e5-9225-0e77fa7675bf">        <Name>Refrigerant Tracking Form (Revision Version)</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1930070" OriginatingLibraryTemplateId="1613895" GUID="ea450faa-a772-11e6-ac54-0e77fa7675bf">        <Name>Repair &amp; Maintenance Inspection</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1904558" OriginatingLibraryTemplateId="" GUID="c48f4988-258a-11e7-9ea9-0a6b7ca77f39">        <Name>Residential Maintenance Agreement</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1892524" OriginatingLibraryTemplateId="" GUID="508c0e52-0502-11e7-b2e4-12c58daff533">        <Name>Roof Inspection</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1952640" OriginatingLibraryTemplateId="" GUID="989f7372-a527-11e6-bb32-1293810c8c83">        <Name>Sales Order</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1977689" OriginatingLibraryTemplateId="" GUID="989f7372-a527-11e6-bb32-1293810c8c83">        <Name>Sales Order</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1823103" OriginatingLibraryTemplateId="27247" GUID="2312b864-f7eb-11e6-b288-0a535f4e0dd5">        <Name>Sales Order/Invoice Receipt</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1977691" OriginatingLibraryTemplateId="" GUID="989f7372-a527-11e6-bb32-1293810c8c83">        <Name>Sales Order_2</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1918603" OriginatingLibraryTemplateId="" GUID="d5dfba82-2e37-11e7-8d8a-0ecd91be6c3b">        <Name>Salon Weekly</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1910641" OriginatingLibraryTemplateId="" GUID="69f916c0-28ff-11e7-ab87-1293810c8c83">        <Name>Service Bid Form</Name>        <Status>published</Status>        <Version>4</Version>      </Form>      <Form Id="1928486" OriginatingLibraryTemplateId="" GUID="f6d23782-1b0a-11e7-b625-12c58daff533">        <Name>Service Report</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1977660" OriginatingLibraryTemplateId="" GUID="96938854-1ee2-11e7-afba-12c58daff533">        <Name>Service Ticket</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1916245" OriginatingLibraryTemplateId="" GUID="1af5f42a-9f67-11e6-b557-0e77fa7675bf">        <Name>TMT Bill Of Lading</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1945068" OriginatingLibraryTemplateId="" GUID="1af5f42a-9f67-11e6-b557-0e77fa7675bf">        <Name>TMT Bill Of Lading</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1951292" OriginatingLibraryTemplateId="" GUID="4d13f3f2-36df-11e7-b195-0e77fa7675bf">        <Name>Time Sheet</Name>        <Status>published</Status>        <Version>5</Version>      </Form>      <Form Id="1895589" OriginatingLibraryTemplateId="" GUID="3b2760a2-1e75-11e7-9026-0e77fa7675bf">        <Name>Topside Inspection App</Name>        <Status>published</Status>        <Version>9</Version>      </Form>      <Form Id="1912405" OriginatingLibraryTemplateId="" GUID="39949c38-24d2-11e7-b1c7-0e77fa7675bf">        <Name>Topside Inspection from ARMS</Name>        <Status>published</Status>        <Version>2</Version>      </Form>      <Form Id="1950943" OriginatingLibraryTemplateId="" GUID="39949c38-24d2-11e7-b1c7-0e77fa7675bf">        <Name>Topside Inspection from ARMS Edit Asset Loop Screened</Name>        <Status>published</Status>        <Version>15</Version>      </Form>      <Form Id="1892412" OriginatingLibraryTemplateId="" GUID="6cf628bc-fcff-11e6-954e-0e77fa7675bf">        <Name>Toxicology Requisition</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1905181" OriginatingLibraryTemplateId="" GUID="b85e3050-25a5-11e7-ac68-1293810c8c83">        <Name>Tune Up Check List</Name>        <Status>published</Status>        <Version>2</Version>      </Form>      <Form Id="1956299" OriginatingLibraryTemplateId="" GUID="bf65f034-4442-11e7-9f82-0a6b7ca77f39">        <Name>Untitled App</Name>        <Status>new</Status>        <Version>1</Version>      </Form>      <Form Id="1923500" OriginatingLibraryTemplateId="" GUID="770df80c-30a8-11e7-a313-0a38e5b61de8">        <Name>Weekly Action Plan - DSM</Name>        <Status>published</Status>        <Version>7</Version>      </Form>      <Form Id="1892518" OriginatingLibraryTemplateId="" GUID="e9b7c612-0367-11e7-a122-0e77fa7675bf">        <Name>Weekly Job Production Report</Name>        <Status>published</Status>        <Version>1</Version>      </Form>      <Form Id="1892535" OriginatingLibraryTemplateId="" GUID="c1202ebc-feb0-11e6-be54-1293810c8c83">        <Name>Weekly Time Sheet</Name>        <Status>published</Status>        <Version>1</Version>      </Form></Forms> </CanvasResult>';


    var javaCodeSubmissionAPI = '<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.BufferedReader;</span><br> \
<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.InputStreamReader;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.HttpURLConnection;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.URL;</span><br><br>\
<span class="text_red">public class &nbsp;&nbsp;</span> SubmissionAPI_Simplified {<br>\
	<span class="text_red">public static void &nbsp;&nbsp;</span> main(String[] args) {<br>\
		StringBuilder stringBuilder = <span class="text_red">&nbsp; new &nbsp;</span> StringBuilder();<br>\
		<span class="text_red">try</span> {<br>\
			String apiUrl = URLEncoder.encode("<span class="text_turquoise">https://www.gocanvas.com/apiv2/submissions.xml?username=test@test.com&password=test123","UTF-8</span>");<br>\
			URL obj = <span class="text_red">new</span> URL(apiUrl);<br>\
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();<br>\
			conn.setDoOutput(<span class="text_red">true</span>);<br>\
			conn.setRequestMethod(<span class="text_turquoise">"GET"</span>);<br>\
			BufferedReader br = <span class="text_red">new</span> BufferedReader(<span class="text_red">new</span> InputStreamReader(<br>\
					conn.getInputStream()));<br>\
			String l = <span class="text_red">null</span>;<br>\
			<span class="text_red">while</span> ((l = br.readLine()) != <span class="text_red">null</span>) {<br>\
				stringBuilder.append(l);<br>\
			}<br>\
		} <span class="text_red">catch</span> (Exception e) {<br>\
			e.printStackTrace();<br>\
		}<br>\
	}<br>\
}';



    var javaCodeImageAPI = '<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.BufferedReader;</span><br> \
<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.InputStreamReader;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.HttpURLConnection;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.URL;</span><br><br>\
<span class="text_red">public class &nbsp;&nbsp;</span> ImagesAPI_Simplified {<br>\
	<span class="text_red">public static void &nbsp;&nbsp;</span> main(String[] args) {<br>\
		StringBuilder stringBuilder = <span class="text_red">&nbsp; new &nbsp;</span> StringBuilder();<br>\
		<span class="text_red">try</span> {<br>\
			String apiUrl = URLEncoder.encode("<span class="text_turquoise">https://www.gocanvas.com/apiv2/images.xml?image_id=1&username=test@test.com&password=test123","UTF-8</span>");<br>\
			URL obj = <span class="text_red">new</span> URL(apiUrl);<br>\
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();<br>\
			conn.setDoOutput(<span class="text_red">true</span>);<br>\
			conn.setRequestMethod(<span class="text_turquoise">"GET"</span>);<br>\
			BufferedReader br = <span class="text_red">new</span> BufferedReader(<span class="text_red">new</span> InputStreamReader(<br>\
					conn.getInputStream()));<br>\
			String l = <span class="text_red">null</span>;<br>\
			<span class="text_red">while</span> ((l = br.readLine()) != <span class="text_red">null</span>) {<br>\
				stringBuilder.append(l);<br>\
			}<br>\
		} <span class="text_red">catch</span> (Exception e) {<br>\
			e.printStackTrace();<br>\
		}<br>\
	}<br>\
}';




    var javaCodeReferenceAPI = '<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.BufferedReader;</span><br> \
<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.InputStreamReader;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.HttpURLConnection;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.URL;</span><br><br>\
<span class="text_red">public class &nbsp;&nbsp;</span> ReferenceDataAPI_Simplified {<br>\
	<span class="text_red">public static void &nbsp;&nbsp;</span> main(String[] args) {<br>\
		StringBuilder stringBuilder = <span class="text_red">&nbsp; new &nbsp;</span> StringBuilder();<br>\
		<span class="text_red">try</span> {<br>\
			String apiUrl = URLEncoder.encode("<span class="text_turquoise">https://www.gocanvas.com/apiv2/reference_datas?username=test@test.com&password=test123","UTF-8</span>");<br>\
			URL obj = <span class="text_red">new</span> URL(apiUrl);<br>\
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();<br>\
			conn.setDoOutput(<span class="text_red">true</span>);<br>\
			conn.setRequestMethod(<span class="text_turquoise">"GET"</span>);<br>\
			BufferedReader br = <span class="text_red">new</span> BufferedReader(<span class="text_red">new</span> InputStreamReader(<br>\
					conn.getInputStream()));<br>\
			String l = <span class="text_red">null</span>;<br>\
			<span class="text_red">while</span> ((l = br.readLine()) != <span class="text_red">null</span>) {<br>\
				stringBuilder.append(l);<br>\
			}<br>\
		} <span class="text_red">catch</span> (Exception e) {<br>\
			e.printStackTrace();<br>\
		}<br>\
	}<br>\
}';


    var javaCodeCSVMetaDataAPI = '<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.BufferedReader;</span><br> \
<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.InputStreamReader;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.HttpURLConnection;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.URL;</span><br><br>\
<span class="text_red">public class &nbsp;&nbsp;</span> ReferenceDataAPI_Simplified {<br>\
	<span class="text_red">public static void &nbsp;&nbsp;</span> main(String[] args) {<br>\
		StringBuilder stringBuilder = <span class="text_red">&nbsp; new &nbsp;</span> StringBuilder();<br>\
		<span class="text_red">try</span> {<br>\
			String apiUrl = URLEncoder.encode(<span class="text_turquoise">"https://www.gocanvas.com/apiv2/csv_meta_datas.xml?username=test@test.com&password=test123&form_id=1&begin_second=962461752&end_second=1593613752","UTF-8</span>);<br>\
			URL obj = <span class="text_red">new</span> URL(apiUrl);<br>\
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();<br>\
			conn.setDoOutput(<span class="text_red">true</span>);<br>\
			conn.setRequestMethod(<span class="text_turquoise">"GET"</span>);<br>\
			BufferedReader br = <span class="text_red">new</span> BufferedReader(<span class="text_red">new</span> InputStreamReader(<br>\
					conn.getInputStream()));<br>\
			String l = <span class="text_red">null</span>;<br>\
			<span class="text_red">while</span> ((l = br.readLine()) != <span class="text_red">null</span>) {<br>\
				stringBuilder.append(l);<br>\
			}<br>\
		} <span class="text_red">catch</span> (Exception e) {<br>\
			e.printStackTrace();<br>\
		}<br>\
	}<br>\
}';


    var javaCodeCSVAPI = '<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.BufferedReader;</span><br> \
<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.InputStreamReader;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.HttpURLConnection;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.URL;</span><br><br>\
<span class="text_red">public class &nbsp;&nbsp;</span> ReferenceDataAPI_Simplified {<br>\
	<span class="text_red">public static void &nbsp;&nbsp;</span> main(String[] args) {<br>\
		StringBuilder stringBuilder = <span class="text_red">&nbsp; new &nbsp;</span> StringBuilder();<br>\
		<span class="text_red">try</span> {<br>\
			String apiUrl = URLEncoder.encode(<span class="text_turquoise">"https://www.gocanvas.com/apiv2/csv.xml?username=test@test.com&password=test123&form_id=1&begin_second=962461752&end_second=1593613752","UTF-8</span>);<br>\
			URL obj = <span class="text_red">new</span> URL(apiUrl);<br>\
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();<br>\
			conn.setDoOutput(<span class="text_red">true</span>);<br>\
			conn.setRequestMethod(<span class="text_turquoise">"GET"</span>);<br>\
			BufferedReader br = <span class="text_red">new</span> BufferedReader(<span class="text_red">new</span> InputStreamReader(<br>\
					conn.getInputStream()));<br>\
			String l = <span class="text_red">null</span>;<br>\
			<span class="text_red">while</span> ((l = br.readLine()) != <span class="text_red">null</span>) {<br>\
				stringBuilder.append(l);<br>\
			}<br>\
		} <span class="text_red">catch</span> (Exception e) {<br>\
			e.printStackTrace();<br>\
		}<br>\
	}<br>\
}';


    var javaCodeDispatchAPI = '<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.BufferedReader;</span><br> \
<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.InputStreamReader;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.HttpURLConnection;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.URL;</span><br><br>\
<span class="text_red">public class &nbsp;&nbsp;</span> ReferenceDataAPI_Simplified {<br>\
	<span class="text_red">public static void &nbsp;&nbsp;</span> main(String[] args) {<br>\
		StringBuilder stringBuilder = <span class="text_red">&nbsp; new &nbsp;</span> StringBuilder();<br>\
		<span class="text_red">try</span> {<br>\
			String apiUrl = URLEncoder.encode(<span class="text_turquoise">"https://www.gocanvas.com/apiv2/dispatch_items?username=test@test.com&password=test123&form_id=1&begin_second=962461752&end_second=1593613752","UTF-8</span>);<br>\
			URL obj = <span class="text_red">new</span> URL(apiUrl);<br>\
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();<br>\
			conn.setDoOutput(<span class="text_red">true</span>);<br>\
			conn.setRequestMethod(<span class="text_turquoise">"GET"</span>);<br>\
			BufferedReader br = <span class="text_red">new</span> BufferedReader(<span class="text_red">new</span> InputStreamReader(<br>\
					conn.getInputStream()));<br>\
			String l = <span class="text_red">null</span>;<br>\
			<span class="text_red">while</span> ((l = br.readLine()) != <span class="text_red">null</span>) {<br>\
				stringBuilder.append(l);<br>\
			}<br>\
		} <span class="text_red">catch</span> (Exception e) {<br>\
			e.printStackTrace();<br>\
		}<br>\
	}<br>\
}';


    var javaCodeSubmissionAPI = '<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.BufferedReader;</span><br> \
<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.InputStreamReader;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.HttpURLConnection;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.URL;</span><br><br>\
<span class="text_red">public class &nbsp;&nbsp;</span> ReferenceDataAPI_Simplified {<br>\
	<span class="text_red">public static void &nbsp;&nbsp;</span> main(String[] args) {<br>\
		StringBuilder stringBuilder = <span class="text_red">&nbsp; new &nbsp;</span> StringBuilder();<br>\
		<span class="text_red">try</span> {<br>\
			String apiUrl = URLEncoder.encode(<span class="text_turquoise">"https://www.gocanvas.com/apiv2/dispatch_items?username=test@test.com&password=test123&form_id=1&begin_second=962461752&end_second=1593613752","UTF-8</span>);<br>\
			URL obj = <span class="text_red">new</span> URL(apiUrl);<br>\
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();<br>\
			conn.setDoOutput(<span class="text_red">true</span>);<br>\
			conn.setRequestMethod(<span class="text_turquoise">"GET"</span>);<br>\
			BufferedReader br = <span class="text_red">new</span> BufferedReader(<span class="text_red">new</span> InputStreamReader(<br>\
					conn.getInputStream()));<br>\
			String l = <span class="text_red">null</span>;<br>\
			<span class="text_red">while</span> ((l = br.readLine()) != <span class="text_red">null</span>) {<br>\
				stringBuilder.append(l);<br>\
			}<br>\
		} <span class="text_red">catch</span> (Exception e) {<br>\
			e.printStackTrace();<br>\
		}<br>\
	}<br>\
}';


    var javaCodeErrorAPI = '<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.BufferedReader;</span><br> \
<span class="text_red">import &nbsp;&nbsp;</span><span>java.io.InputStreamReader;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.HttpURLConnection;</span><br>\
<span class="text_red">import &nbsp;&nbsp;</span><span>java.net.URL;</span><br><br>\
<span class="text_red">public class &nbsp;&nbsp;</span> ReferenceDataAPI_Simplified {<br>\
	<span class="text_red">public static void &nbsp;&nbsp;</span> main(String[] args) {<br>\
		StringBuilder stringBuilder = <span class="text_red">&nbsp; new &nbsp;</span> StringBuilder();<br>\
		<span class="text_red">try</span> {<br>\
			String apiUrl = URLEncoder.encode(<span class="text_turquoise">"https://www.gocanvas.com/apiv2/images.xml?username=test@test.com&password=test123&form_id=1&begin_second=962461752&end_second=1593613752","UTF-8"</span>);<br>\
			URL obj = <span class="text_red">new</span> URL(apiUrl);<br>\
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();<br>\
			conn.setDoOutput(<span class="text_red">true</span>);<br>\
			conn.setRequestMethod(<span class="text_turquoise">"GET"</span>);<br>\
			BufferedReader br = <span class="text_red">new</span> BufferedReader(<span class="text_red">new</span> InputStreamReader(<br>\
					conn.getInputStream()));<br>\
			String l = <span class="text_red">null</span>;<br>\
			<span class="text_red">while</span> ((l = br.readLine()) != <span class="text_red">null</span>) {<br>\
				stringBuilder.append(l);<br>\
			}<br>\
		} <span class="text_red">catch</span> (Exception e) {<br>\
			e.printStackTrace();<br>\
		}<br>\
	}<br>\
}';

    document.getElementById('submissions_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>Submissions API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/submissions.xml</p> <p class="api_header text-left">REST API Call Example:</p> <p class="code"> ' + javaCodeSubmissionAPI + '</p><p>&nbsp;</p> <p class="api_header text-left">Resulting XML:</p> <p class="code"> <span class="text_turquoise">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span><br /> <span class="text_turquoise">&lt;CanvasResult&gt;</span><br /> <span class="text_turquoise">&lt;TotalPages&gt;</span>1<span class="text_turquoise">&lt;/TotalPages&gt;</span><br /> <span class="text_turquoise">&lt;Submissions&gt;</span><br /> <span class="text_turquoise">&lt;Submission Id="1" Department="Test Department"&gt;</span><br /> <span class="text_turquoise">&lt;UserName&gt;</span>test@test.com<span class="text_turquoise">&lt;/UserName&gt;</span><br /> <span class="text_turquoise">&lt;FirstName&gt;</span>Test<span class="text_turquoise">&lt;/FirstName&gt;</span><br /> <span class="text_turquoise">&lt;LastName&gt;</span>Tester<span class="text_turquoise">&lt;/LastName&gt;</span><br /> <span class="text_turquoise">&lt;ResponseID&gt;</span>258aaa53-77aa2-4e58-bb88-f404dd363fff3<span class="text_turquoise">&lt;/ResponseID&gt;</span><br /> <span class="text_turquoise">&lt;Date&gt;</span>2009.08.31 20:20:17<span class="text_turquoise">&lt;/Date&gt;</span><br /> <span class="text_turquoise">&lt;DeviceDate&gt;</span>2009.08.31 20:20:17<span class="text_turquoise">&lt;/DeviceDate&gt;</span><br /> <span class="text_turquoise">&lt;Form Id="1"&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>test form<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Status&gt;</span>published<span class="text_turquoise">&lt;/Status&gt;</span><br /> <span class="text_turquoise">&lt;Version&gt;</span>1<span class="text_turquoise">&lt;/Version&gt;</span><br /> <span class="text_turquoise">&lt;/Form&gt;</span><br /> <span class="text_turquoise">&lt;Sections&gt;</span><br /> <span class="text_turquoise">&lt;Section&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Main Info<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Sheets&gt;</span><br /> <span class="text_turquoise">&lt;Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Main Info<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Responses&gt;</span><br /> <span class="text_turquoise">&lt;Response id="8217"&gt;</span><br /> <span class="text_turquoise">&lt;label&gt;</span>First Name<span class="text_turquoise">&lt;/label&gt;</span><br /> <span class="text_turquoise">&lt;value&gt;</span>James<span class="text_turquoise">&lt;/value&gt;</span><br /> <span class="text_turquoise">&lt;type&gt;</span>Text Box<span class="text_turquoise">&lt;/type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;/Responses&gt;</span><br /> <span class="text_turquoise">&lt;/Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Date List<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;ResponseGroups&gt;</span><br /> <span class="text_turquoise">&lt;ResponseGroup&gt;</span><br /> <span class="text_turquoise">&lt;Response&gt;</span><br /> <span class="text_turquoise">&lt;Label&gt;</span>Date<span class="text_turquoise">&lt;/Label&gt;</span><br /> <span class="text_turquoise">&lt;Value&gt;</span>6/22/09<span class="text_turquoise">&lt;/Value&gt;</span><br /> <span class="text_turquoise">&lt;Type&gt;</span>Date<span class="text_turquoise">&lt;/Type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;Section&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Date Entry<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Sheets&gt;</span><br /> <span class="text_turquoise">&lt;Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Date<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Responses&gt;</span><br /> <span class="text_turquoise">&lt;Response&gt;</span><br /> <span class="text_turquoise">&lt;Label&gt;</span>Date<span class="text_turquoise">&lt;/Label&gt;</span><br /> <span class="text_turquoise">&lt;Value&gt;</span>06/22/09<span class="text_turquoise">&lt;/Value&gt;</span><br /> <span class="text_turquoise">&lt;Type&gt;</span>Date<span class="text_turquoise">&lt;/Type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;Response&gt;</span><br /> <span class="text_turquoise">&lt;Label&gt;</span>Click your track ball and select "Next" to enter a list of time entries.<span class="text_turquoise">&lt;/Label&gt;</span><br /> <span class="text_turquoise">&lt;Value&gt;</span><br /><span class="text_turquoise">&lt;/Value&gt;</span><br /> <span class="text_turquoise">&lt;Type&gt;</span>Static Text<span class="text_turquoise">&lt;/Type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;/Responses&gt;</span><br /> <span class="text_turquoise">&lt;/Sheet&gt;</span><br /> <span class="text_turquoise">&lt;/Sheets&gt;</span><br /> <span class="text_turquoise">&lt;/Section&gt;</span><br /> <span class="text_turquoise">&lt;/ResponseGroup&gt;</span><br /> <span class="text_turquoise">&lt;/ResponseGroups&gt;</span><br /> <span class="text_turquoise">&lt;/Sheet&gt;</span><br /> <span class="text_turquoise">&lt;/Sheets&gt;</span><br /> <span class="text_turquoise">&lt;/Section&gt;</span><br /> <span class="text_turquoise">&lt;/Sections&gt;</span><br /> <span class="text_turquoise">&lt;/Submission&gt;</span><br /><span class="text_turquoise">&lt;/Submissions&gt;</span><br /><span class="text_turquoise">&lt;/CanvasResult&gt;</span><br />';
    document.getElementById('images_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Images API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/images.xml</p> <p class="api_header text-left">REST API Call Example:</p> <p class="code"> ' + javaCodeImageAPI + '  </p> <p>&nbsp;</p> <p>Resulting image:</p><br><center> <p class="code"> <img src="images/image-api-result.png" /> </p></center>';
    document.getElementById('reference_data_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Reference Data API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/reference_datas</p> <p class="api_header text-left">REST API Call Example:</p> <p class="code">' + javaCodeReferenceAPI + '</p> <p>&nbsp;</p> <p>Post Payload:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" Department="Test Department"&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Data1Column1&lt;/v&gt;&lt;v&gt;Data1Column2&lt;/v&gt;&lt;v&gt;Data1Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Data2Column1&lt;/v&gt;&lt;v&gt;Data2Column2&lt;/v&gt;&lt;v&gt;Data2Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;CanvasResult&gt;<br /> &lt;/CanvasResult&gt;<br /> </p> <p>Post Payload to divide data by into user groups defined in Column1:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" UserGroupColumn ="Column1&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Group1&lt;/v&gt;&lt;v&gt;Data1Column2&lt;/v&gt;&lt;v&gt;Data1Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data2Column2&lt;/v&gt;&lt;v&gt;Data2Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p> <p>Post Payload to replace the data in Group2:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" Action="Update" UserGroup =" Group2&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data3Column2&lt;/v&gt;&lt;v&gt;Data3Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data4Column2&lt;/v&gt;&lt;v&gt;Data4Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p> <p>Post Payload to append new data to existing or new user groups:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" Action="Append"&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data5Column2&lt;/v&gt;&lt;v&gt;Data5Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Group3&lt;/v&gt;&lt;v&gt;Data6Column2&lt;/v&gt;&lt;v&gt;Data6Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p>';
    document.getElementById('csv_meta_data_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>CSV Meta Data API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/csv_meta_datas.xml</p> <p>https://www.gocanvas.com/apiv2/csv_meta_datas.xml</p> <p class="code">' + javaCodeReferenceAPI + '</p> <p>&nbsp;</p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;CanvasResult&gt;<br /> &lt;CSVMetaData&gt;<br /> &lt;Form Id="1" OriginatingLibraryTemplateId="" GUID="f6167220-a09d-11df-8e32- 00242bb0cd70"&gt;<br /> &lt;Name&gt;test form&lt;/Name&gt;<br /> &lt;Status&gt;retired&lt;/Status&gt;<br /> &lt;Version&gt;1&lt;/Version&gt;<br /> &lt;SubmissionCount&gt;1&lt;/SubmissionCount&gt;<br /> &lt;/Form&gt;<br /> &lt;Form Id="2" OriginatingLibraryTemplateId="" GUID="f6167220-a09d-11df-8e32- 00242bb0cd70"&gt;<br /> &lt;Name&gt;second form&lt;/Name&gt;<br /> &lt;Status&gt;published&lt;/Status&gt;<br /> &lt;Version&gt;2&lt;/Version&gt;<br /> &lt;SubmissionCount&gt;5&lt;/SubmissionCount&gt;<br /> &lt;/Form&gt;<br /> &lt;/CSVMetaData&gt;<br /> &lt;/CanvasResult&gt;<br /> </p>';
    document.getElementById('csv_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>CSV API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/csv.xml</p> <p>REST API Call Example:</p> <p class="code">' + javaCodeCSVAPI + '</p> <p>&nbsp;</p> <p>Resulting image:</p> <p class="code"> "Start Date","End Date","Export App Name","Username","User Last Name","User First Name","Response ID","Response Date/Time","Device Date/Time","Submission Form Name","Submission Form Version"<br /><br /> 2000-07-26 00:00:00","2020-07-26 23:59:00","Form Name","test@test.com","Test","User","B9E3AB25-EAE3-4A55-9136-E7CC921ED01E","07/26/2011 15:04:29","07/26/2011 15:04:09","Form Name" </p>';
    document.getElementById('dispatch_items_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Reference Data API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/dispatch_items</p> <p>REST API Call Example:</p> <p class="code">' + javaCodeDispatchAPI + '</p> <p>&nbsp;</p> <p>Post Payload:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;List&gt;</br /> &lt;DI FormName="Simpsons App" Description="#1 item" User="homer@mailinator.com"<br /> ScheduleAt="01/23/2015 09:15" Department="Test Department"&gt;</br /> &lt;DIEntry Label="first name" Value="Homer"/&gt;</br /> &lt;DIEntry Label="last name" Value="Simpson"/&gt;</br /> &lt;/DI&gt;</br /> &lt;DI FormName=" Simpsons App"&gt;</br /> &lt;DIEntry Label="first name" Value="Marge"/&gt;</br /> &lt;DIEntry Label="age" Value="35"/&gt;</br /> &lt;/DI&gt;</br /> &lt;/List&gt;</br /> </p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;CanvasResult&gt;</br /> &lt;/CanvasResult&gt;</br /> </p> <p>Post Payload with Dispatch List:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;List&gt;</br /> &lt;DI FormName="Your App" Description="1st item" User="myemail@email.com"&gt;</br /> &lt;DIEntry Label="First Label" Value="1st value"/&gt;</br /> &lt;DIEntry Label="Second Label" Value="2rd value"/&gt;</br /> &lt;DIListItems&gt;</br /> &lt;DIListItem&gt;</br /> &lt;DIEntries&gt;</br /> &lt;DIEntry Label="Name" Value="Tony Stark"/&gt;</br /> &lt;DIEntry Label="Nick Name" Value="Iron Man"/&gt;</br /> &lt;DIEntry Label="Occupation" Value="Super Hero"/&gt;</br /> &lt;/DIEntries&gt;</br /> &lt;/DIListItem&gt;</br /> &lt;DIListItem&gt;</br /> &lt;DIEntries&gt;</br /> &lt;DIEntry Label="Name" Value="Bruce Banner"/&gt;</br /> &lt;DIEntry Label="Nick Name" Value="Hulk"/&gt;</br /> &lt;DIEntry Label="Occupation" Value="Super Hero"/&gt;</br /> &lt;/DIEntries&gt;</br /> &lt;/DIListItem&gt;</br /> &lt;/DIListItems&gt;</br /> &lt;/DI&gt;</br /> &lt;/List&gt;</br /> </p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;CanvasResult&gt;</br /> &lt;/CanvasResult&gt;</br /> </p>';
    document.getElementById('submission_push_notifications_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>For any given submission, Canvas will send the submission GUID, the name, ID, and guid of your<br />form, and will optionally include a tag that you define (see the "Setting Up" section below). This will<br />be contained within an XML document as the body of the HTTP POST. Here\'s an example:</p> <p class="code"> &lt;?xml version="1.0" encoding="UTF-8"?&gt;<br /> &lt;submission_notification&gt;<br /> &lt;form&gt;<br /> &lt;id type="integer"&gt;1&lt;/id&gt;<br /> &lt;name&gt;FORM_NAME&lt;/name&gt;<br /> &lt;guid&gt;FORM_GUID&lt;/guid&gt;<br /> &lt;tag&gt;Your Tag&lt;/tag&gt;<br /> &lt;/form&gt;<br /> &lt;submission&gt;<br /> &lt;guid&gt;SUBMISSION_GUID&lt;/guid&gt;<br /> &lt;/submission&gt;<br /> &lt;/ submission_notification &gt;<br /> </p>';
    document.getElementById('forms_api_code').innerHTML = '<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p class="api_header text-left">Forms API URL:</p><p class="code">https://www.gocanvas.com/apiv2/forms.xml</p><p class="api_header text-left">REST API Call Example:</p><p class="code">' + javaCodeFormAPI + '</p><p>&nbsp;</p><p class="api_header text-left">Resulting XML:</p><p class="code"><span class="text_turquoise">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span><br /><span class="text_turquoise">&lt;CanvasResult&gt;</span><br /><span class="text_turquoise">&lt;Forms&gt;</span><br /><span class="text_turquoise">&lt;Form Id="1" OriginatingLibraryTemplateId="" GUID="f6167220-a09d-11df-8e32-00242bb0cd70"&gt;</span><br /><span class="text_turquoise">&lt;Name&gt;</span>test form<span class="text_turquoise">&lt;/Name&gt;</span><br /><span class="text_turquoise">&lt;Status&gt;</span>published<span class="text_turquoise">&lt;/Status&gt;</span><br /><span class="text_turquoise">&lt;Version&gt;</span>1<span class="text_turquoise">&lt;/Version&gt;</span><br /><span class="text_turquoise">&lt;/Form&gt;</span></p>';
    document.getElementById('error_codes_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Example of an invalid webservice invocation (missing the required "id" parameter):</p> <p class="code">' + javaCodeErrorAPI + '</p>  <p>Result:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt; &lt;CanvasResult&gt; &lt;Error&gt; &lt;ErrorCode&gt;10&lt;/ErrorCode&gt; &lt;Description&gt;Required parameter is missing&lt;/Description&gt; &lt;/Error&gt; &lt;/CanvasResult&gt;</p>';

};

var changeToRuby = function() {
    document.getElementById('forms_api_code').innerHTML = 'This is Ruby';

    /*document.getElementById('submissions_api_code').innerHTML = 'This is Ruby';
	
    document.getElementById('images_api_code').innerHTML = 'This is Ruby';
	
    document.getElementById('reference_data_api_code').innerHTML = 'v';
	
    document.getElementById('csv_meta_data_api_code').innerHTML = 'This is Ruby';
	
    document.getElementById('csv_api_code').innerHTML = 'This is Ruby';
	
    document.getElementById('dispatch_items_api_code').innerHTML = 'This is Ruby';
	
    document.getElementById('submission_push_notifications_api_code').innerHTML = 'This is Ruby';
	
    document.getElementById('error_codes_api_code').innerHTML = 'This is Ruby';*/
};

var changeToPython = function() {
    document.getElementById('forms_api_code').innerHTML = 'This is Python'

    document.getElementById('submissions_api_code').innerHTML = 'This is Python';

    document.getElementById('images_api_code').innerHTML = 'This is Python';

    document.getElementById('reference_data_api_code').innerHTML = 'This is Python';

    document.getElementById('csv_meta_data_api_code').innerHTML = 'This is Python';

    document.getElementById('csv_api_code').innerHTML = 'This is Python';

    document.getElementById('dispatch_items_api_code').innerHTML = 'This is Python';

    document.getElementById('submission_push_notifications_api_code').innerHTML = 'This is Python';

    document.getElementById('error_codes_api_code').innerHTML = 'This is Python';
};


var changeToPHP = function() {
    document.getElementById('forms_api_code').innerHTML = 'This is PHP'

    document.getElementById('submissions_api_code').innerHTML = 'This is PHP';

    document.getElementById('images_api_code').innerHTML = 'This is PHP';

    document.getElementById('reference_data_api_code').innerHTML = 'This is PHP';

    document.getElementById('csv_meta_data_api_code').innerHTML = 'This is PHP';

    document.getElementById('csv_api_code').innerHTML = 'This is PHP';

    document.getElementById('dispatch_items_api_code').innerHTML = 'This is PHP';

    document.getElementById('submission_push_notifications_api_code').innerHTML = 'This is PHP';

    document.getElementById('error_codes_api_code').innerHTML = 'This is PHP';
};


// var changeToJava = function () {
// alert("Java");
// document.getElementById('forms_api_code').innerHTML = 'This is Java'

// document.getElementById('submissions_api_code').innerHTML = 'This is Java';

// document.getElementById('images_api_code').innerHTML = 'This is Java';

// document.getElementById('reference_data_api_code').innerHTML = 'This is Java';

// document.getElementById('csv_meta_data_api_code').innerHTML = 'This is Java';

// document.getElementById('csv_api_code').innerHTML = 'This is Java';

// document.getElementById('dispatch_items_api_code').innerHTML = 'This is Java';

// document.getElementById('submission_push_notifications_api_code').innerHTML = 'This is Java';

// document.getElementById('error_codes_api_code').innerHTML = 'This is Java';
// };

var changeToNode = function() {
    document.getElementById('forms_api_code').innerHTML = 'This is Node'

    document.getElementById('submissions_api_code').innerHTML = 'This is Node';

    document.getElementById('images_api_code').innerHTML = 'This is Node';

    document.getElementById('reference_data_api_code').innerHTML = 'This is Node';

    document.getElementById('csv_meta_data_api_code').innerHTML = 'This is Node';

    document.getElementById('csv_api_code').innerHTML = 'This is Node';

    document.getElementById('dispatch_items_api_code').innerHTML = 'This is Node';

    document.getElementById('submission_push_notifications_api_code').innerHTML = 'This is Node';

    document.getElementById('error_codes_api_code').innerHTML = 'This is Node';
};

var changeToSwift = function() {
    document.getElementById('forms_api_code').innerHTML = 'This is Swift'

    document.getElementById('submissions_api_code').innerHTML = 'This is Swift';

    document.getElementById('images_api_code').innerHTML = 'This is Swift';

    document.getElementById('reference_data_api_code').innerHTML = 'This is Swift';

    document.getElementById('csv_meta_data_api_code').innerHTML = 'This is Swift';

    document.getElementById('csv_api_code').innerHTML = 'This is Swift';

    document.getElementById('dispatch_items_api_code').innerHTML = 'This is Swift';

    document.getElementById('submission_push_notifications_api_code').innerHTML = 'This is Swift';

    document.getElementById('error_codes_api_code').innerHTML = 'This is Swift';
};

var changeToCpp = function() {
    document.getElementById('forms_api_code').innerHTML = 'This is C++'

    document.getElementById('submissions_api_code').innerHTML = 'This is C++';

    document.getElementById('images_api_code').innerHTML = 'This is C++';

    document.getElementById('reference_data_api_code').innerHTML = 'This is C++';

    document.getElementById('csv_meta_data_api_code').innerHTML = 'This is C++';

    document.getElementById('csv_api_code').innerHTML = 'This is C++';

    document.getElementById('dispatch_items_api_code').innerHTML = 'This is C++';

    document.getElementById('submission_push_notifications_api_code').innerHTML = 'This is C++';

    document.getElementById('error_codes_api_code').innerHTML = 'This is C++';
};