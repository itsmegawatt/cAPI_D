// JavaScript Document
var changeToCurl = function () {
	document.getElementById('forms_api_code').innerHTML = '<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Forms API URL:</p><p class="code">https://www.gocanvas.com/apiv2/forms.xml</p><p>REST API Call Example:</p><p class="code">https://www.gocanvas.com/apiv2/forms.xml?username=test@test.com&password=test_password</p><p>&nbsp;</p><p>Resulting XML:</p><p class="code"><span class="text_turquoise">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span><br /><span class="text_turquoise">&lt;CanvasResult&gt;</span><br /><span class="text_turquoise">&lt;Forms&gt;</span><br /><span class="text_turquoise">&lt;Form Id="1" OriginatingLibraryTemplateId="" GUID="f6167220-a09d-11df-8e32-00242bb0cd70"&gt;</span><br /><span class="text_turquoise">&lt;Name&gt;</span>test form<span class="text_turquoise">&lt;/Name&gt;</span><br /><span class="text_turquoise">&lt;Status&gt;</span>published<span class="text_turquoise">&lt;/Status&gt;</span><br /><span class="text_turquoise">&lt;Version&gt;</span>1<span class="text_turquoise">&lt;/Version&gt;</span><br /><span class="text_turquoise">&lt;/Form&gt;</span></p>';
	
	document.getElementById('submissions_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>Submissions API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/submissions.xml</p> <p>REST API Call Example:</p> <p class="code">https://www.gocanvas.com/apiv2/forms.xml?username=test@test.com&password=test_password</p> <p>&nbsp;</p> <p>Resulting XML:</p> <p class="code"> <span class="text_turquoise">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span><br /> <span class="text_turquoise">&lt;CanvasResult&gt;</span><br /> <span class="text_turquoise">&lt;TotalPages&gt;</span>1<span class="text_turquoise">&lt;/TotalPages&gt;</span><br /> <span class="text_turquoise">&lt;Submissions&gt;</span><br /> <span class="text_turquoise">&lt;Submission Id="1" Department="Test Department"&gt;</span><br /> <span class="text_turquoise">&lt;UserName&gt;</span>test@test.com<span class="text_turquoise">&lt;/UserName&gt;</span><br /> <span class="text_turquoise">&lt;FirstName&gt;</span>Test<span class="text_turquoise">&lt;/FirstName&gt;</span><br /> <span class="text_turquoise">&lt;LastName&gt;</span>Tester<span class="text_turquoise">&lt;/LastName&gt;</span><br /> <span class="text_turquoise">&lt;ResponseID&gt;</span>258aaa53-77aa2-4e58-bb88-f404dd363fff3<span class="text_turquoise">&lt;/ResponseID&gt;</span><br /> <span class="text_turquoise">&lt;Date&gt;</span>2009.08.31 20:20:17<span class="text_turquoise">&lt;/Date&gt;</span><br /> <span class="text_turquoise">&lt;DeviceDate&gt;</span>2009.08.31 20:20:17<span class="text_turquoise">&lt;/DeviceDate&gt;</span><br /> <span class="text_turquoise">&lt;Form Id="1"&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>test form<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Status&gt;</span>published<span class="text_turquoise">&lt;/Status&gt;</span><br /> <span class="text_turquoise">&lt;Version&gt;</span>1<span class="text_turquoise">&lt;/Version&gt;</span><br /> <span class="text_turquoise">&lt;/Form&gt;</span><br /> <span class="text_turquoise">&lt;Sections&gt;</span><br /> <span class="text_turquoise">&lt;Section&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Main Info<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Sheets&gt;</span><br /> <span class="text_turquoise">&lt;Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Main Info<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Responses&gt;</span><br /> <span class="text_turquoise">&lt;Response id="8217"&gt;</span><br /> <span class="text_turquoise">&lt;label&gt;</span>First Name<span class="text_turquoise">&lt;/label&gt;</span><br /> <span class="text_turquoise">&lt;value&gt;</span>James<span class="text_turquoise">&lt;/value&gt;</span><br /> <span class="text_turquoise">&lt;type&gt;</span>Text Box<span class="text_turquoise">&lt;/type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;/Responses&gt;</span><br /> <span class="text_turquoise">&lt;/Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Date List<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;ResponseGroups&gt;</span><br /> <span class="text_turquoise">&lt;ResponseGroup&gt;</span><br /> <span class="text_turquoise">&lt;Response&gt;</span><br /> <span class="text_turquoise">&lt;Label&gt;</span>Date<span class="text_turquoise">&lt;/Label&gt;</span><br /> <span class="text_turquoise">&lt;Value&gt;</span>6/22/09<span class="text_turquoise">&lt;/Value&gt;</span><br /> <span class="text_turquoise">&lt;Type&gt;</span>Date<span class="text_turquoise">&lt;/Type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;Section&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Date Entry<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Sheets&gt;</span><br /> <span class="text_turquoise">&lt;Sheet&gt;</span><br /> <span class="text_turquoise">&lt;Name&gt;</span>Date<span class="text_turquoise">&lt;/Name&gt;</span><br /> <span class="text_turquoise">&lt;Responses&gt;</span><br /> <span class="text_turquoise">&lt;Response&gt;</span><br /> <span class="text_turquoise">&lt;Label&gt;</span>Date<span class="text_turquoise">&lt;/Label&gt;</span><br /> <span class="text_turquoise">&lt;Value&gt;</span>06/22/09<span class="text_turquoise">&lt;/Value&gt;</span><br /> <span class="text_turquoise">&lt;Type&gt;</span>Date<span class="text_turquoise">&lt;/Type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;Response&gt;</span><br /> <span class="text_turquoise">&lt;Label&gt;</span>Click your track ball and select "Next" to enter a list of time entries.<span class="text_turquoise">&lt;/Label&gt;</span><br /> <span class="text_turquoise">&lt;Value&gt;</span><br /><span class="text_turquoise">&lt;/Value&gt;</span><br /> <span class="text_turquoise">&lt;Type&gt;</span>Static Text<span class="text_turquoise">&lt;/Type&gt;</span><br /> <span class="text_turquoise">&lt;/Response&gt;</span><br /> <span class="text_turquoise">&lt;/Responses&gt;</span><br /> <span class="text_turquoise">&lt;/Sheet&gt;</span><br /> <span class="text_turquoise">&lt;/Sheets&gt;</span><br /> <span class="text_turquoise">&lt;/Section&gt;</span><br /> <span class="text_turquoise">&lt;/ResponseGroup&gt;</span><br /> <span class="text_turquoise">&lt;/ResponseGroups&gt;</span><br /> <span class="text_turquoise">&lt;/Sheet&gt;</span><br /> <span class="text_turquoise">&lt;/Sheets&gt;</span><br /> <span class="text_turquoise">&lt;/Section&gt;</span><br /> <span class="text_turquoise">&lt;/Sections&gt;</span><br /> <span class="text_turquoise">&lt;/Submission&gt;</span><br /><span class="text_turquoise">&lt;/Submissions&gt;</span><br /><span class="text_turquoise">&lt;/CanvasResult&gt;</span><br />';
	
	document.getElementById('images_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Images API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/images.xml</p> <p>REST API Call Example:</p> <p class="code">https://www.gocanvas.com/apiv2/images.xml?image_id=1&username=test@test.com&password=test</p> <p>&nbsp;</p> <p>Resulting image:</p><br><center> <p class="code"> <img src="images/image-api-result.png" /> </p></center>';
	
	document.getElementById('reference_data_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Reference Data API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/reference_datas</p> <p>REST API Call Example:</p> <p class="code">https://www.gocanvas.com/apiv2/reference_datas?username=test@test.com&password=test_password</p> <p>&nbsp;</p> <p>Post Payload:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" Department="Test Department"&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Data1Column1&lt;/v&gt;&lt;v&gt;Data1Column2&lt;/v&gt;&lt;v&gt;Data1Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Data2Column1&lt;/v&gt;&lt;v&gt;Data2Column2&lt;/v&gt;&lt;v&gt;Data2Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;CanvasResult&gt;<br /> &lt;/CanvasResult&gt;<br /> </p> <p>Post Payload to divide data by into user groups defined in Column1:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" UserGroupColumn ="Column1&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Group1&lt;/v&gt;&lt;v&gt;Data1Column2&lt;/v&gt;&lt;v&gt;Data1Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data2Column2&lt;/v&gt;&lt;v&gt;Data2Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p> <p>Post Payload to replace the data in Group2:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" Action="Update" UserGroup =" Group2&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data3Column2&lt;/v&gt;&lt;v&gt;Data3Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data4Column2&lt;/v&gt;&lt;v&gt;Data4Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p> <p>Post Payload to append new data to existing or new user groups:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;List Name="test name" Action="Append"&gt;<br /> &lt;Columns&gt;&lt;c&gt;Column1&lt;/c&gt;&lt;c&gt;Column2&lt;/c&gt;&lt;c&gt;Column3&lt;/c&gt;&lt;/Columns&gt;<br /> &lt;Rows&gt;<br /> &lt;r&gt;&lt;v&gt;Group2&lt;/v&gt;&lt;v&gt;Data5Column2&lt;/v&gt;&lt;v&gt;Data5Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;r&gt;&lt;v&gt;Group3&lt;/v&gt;&lt;v&gt;Data6Column2&lt;/v&gt;&lt;v&gt;Data6Column3&lt;/v&gt;&lt;/r&gt;<br /> &lt;/Rows&gt;<br /> &lt;/List&gt;<br /> </p>';
	
	document.getElementById('csv_meta_data_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>CSV Meta Data API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/csv_meta_datas.xml</p> <p>https://www.gocanvas.com/apiv2/csv_meta_datas.xml</p> <p class="code">https://www.gocanvas.com/apiv2/csv_meta_datas.xml?username=test@test.com&password=test_password&form_id=1&begin_second=962461752&end_second=1593613752</p> <p>&nbsp;</p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;<br /> &lt;CanvasResult&gt;<br /> &lt;CSVMetaData&gt;<br /> &lt;Form Id="1" OriginatingLibraryTemplateId="" GUID="f6167220-a09d-11df-8e32- 00242bb0cd70"&gt;<br /> &lt;Name&gt;test form&lt;/Name&gt;<br /> &lt;Status&gt;retired&lt;/Status&gt;<br /> &lt;Version&gt;1&lt;/Version&gt;<br /> &lt;SubmissionCount&gt;1&lt;/SubmissionCount&gt;<br /> &lt;/Form&gt;<br /> &lt;Form Id="2" OriginatingLibraryTemplateId="" GUID="f6167220-a09d-11df-8e32- 00242bb0cd70"&gt;<br /> &lt;Name&gt;second form&lt;/Name&gt;<br /> &lt;Status&gt;published&lt;/Status&gt;<br /> &lt;Version&gt;2&lt;/Version&gt;<br /> &lt;SubmissionCount&gt;5&lt;/SubmissionCount&gt;<br /> &lt;/Form&gt;<br /> &lt;/CSVMetaData&gt;<br /> &lt;/CanvasResult&gt;<br /> </p>';
	
	document.getElementById('csv_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>CSV API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/csv.xml</p> <p>REST API Call Example:</p> <p class="code">https://www.gocanvas.com/apiv2/csv.xml?username=test@test.com&password=test_password&form_id=1&begin_second=962461752&end_second=1593613752</p> <p>&nbsp;</p> <p>Resulting image:</p> <p class="code"> "Start Date","End Date","Export App Name","Username","User Last Name","User First Name","Response ID","Response Date/Time","Device Date/Time","Submission Form Name","Submission Form Version"<br /><br /> 2000-07-26 00:00:00","2020-07-26 23:59:00","Form Name","test@test.com","Test","User","B9E3AB25-EAE3-4A55-9136-E7CC921ED01E","07/26/2011 15:04:29","07/26/2011 15:04:09","Form Name" </p>';
	
	document.getElementById('dispatch_items_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Reference Data API URL:</p> <p class="code">https://www.gocanvas.com/apiv2/dispatch_items</p> <p>REST API Call Example:</p> <p class="code">https://www.gocanvas.com/apiv2/csv.xml?username=test@test.com&password=test_password&form_id=1&begin_second=962461752&end_second=1593613752</p> <p>&nbsp;</p> <p>Post Payload:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;List&gt;</br /> &lt;DI FormName="Simpsons App" Description="#1 item" User="homer@mailinator.com"<br /> ScheduleAt="01/23/2015 09:15" Department="Test Department"&gt;</br /> &lt;DIEntry Label="first name" Value="Homer"/&gt;</br /> &lt;DIEntry Label="last name" Value="Simpson"/&gt;</br /> &lt;/DI&gt;</br /> &lt;DI FormName=" Simpsons App"&gt;</br /> &lt;DIEntry Label="first name" Value="Marge"/&gt;</br /> &lt;DIEntry Label="age" Value="35"/&gt;</br /> &lt;/DI&gt;</br /> &lt;/List&gt;</br /> </p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;CanvasResult&gt;</br /> &lt;/CanvasResult&gt;</br /> </p> <p>Post Payload with Dispatch List:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;List&gt;</br /> &lt;DI FormName="Your App" Description="1st item" User="myemail@email.com"&gt;</br /> &lt;DIEntry Label="First Label" Value="1st value"/&gt;</br /> &lt;DIEntry Label="Second Label" Value="2rd value"/&gt;</br /> &lt;DIListItems&gt;</br /> &lt;DIListItem&gt;</br /> &lt;DIEntries&gt;</br /> &lt;DIEntry Label="Name" Value="Tony Stark"/&gt;</br /> &lt;DIEntry Label="Nick Name" Value="Iron Man"/&gt;</br /> &lt;DIEntry Label="Occupation" Value="Super Hero"/&gt;</br /> &lt;/DIEntries&gt;</br /> &lt;/DIListItem&gt;</br /> &lt;DIListItem&gt;</br /> &lt;DIEntries&gt;</br /> &lt;DIEntry Label="Name" Value="Bruce Banner"/&gt;</br /> &lt;DIEntry Label="Nick Name" Value="Hulk"/&gt;</br /> &lt;DIEntry Label="Occupation" Value="Super Hero"/&gt;</br /> &lt;/DIEntries&gt;</br /> &lt;/DIListItem&gt;</br /> &lt;/DIListItems&gt;</br /> &lt;/DI&gt;</br /> &lt;/List&gt;</br /> </p> <p>Resulting XML:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt;</br /> &lt;CanvasResult&gt;</br /> &lt;/CanvasResult&gt;</br /> </p>';
	
	document.getElementById('submission_push_notifications_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>For any given submission, Canvas will send the submission GUID, the name, ID, and guid of your<br />form, and will optionally include a tag that you define (see the "Setting Up" section below). This will<br />be contained within an XML document as the body of the HTTP POST. Here\'s an example:</p> <p class="code"> &lt;?xml version="1.0" encoding="UTF-8"?&gt;<br /> &lt;submission_notification&gt;<br /> &lt;form&gt;<br /> &lt;id type="integer"&gt;1&lt;/id&gt;<br /> &lt;name&gt;FORM_NAME&lt;/name&gt;<br /> &lt;guid&gt;FORM_GUID&lt;/guid&gt;<br /> &lt;tag&gt;Your Tag&lt;/tag&gt;<br /> &lt;/form&gt;<br /> &lt;submission&gt;<br /> &lt;guid&gt;SUBMISSION_GUID&lt;/guid&gt;<br /> &lt;/submission&gt;<br /> &lt;/ submission_notification &gt;<br /> </p>';
	
	document.getElementById('error_codes_api_code').innerHTML = '<p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>Example of an invalid webservice invocation (missing the required "id" parameter):</p> <p class="code">https://www.gocanvas.com/apiv2/images.xml?username=test@gocanvas.com@password=test</p> <p>Result:</p> <p class="code"> &lt;?xml version="1.0" encoding="utf-8"?&gt; &lt;CanvasResult&gt; &lt;Error&gt; &lt;ErrorCode&gt;10&lt;/ErrorCode&gt; &lt;Description&gt;Required parameter is missing&lt;/Description&gt; &lt;/Error&gt; &lt;/CanvasResult&gt;</p>';
	
};

var changeToRuby = function () {
	document.getElementById('forms_api_code').innerHTML = 'This is Ruby'
	
	document.getElementById('submissions_api_code').innerHTML = 'This is Ruby';
	
	document.getElementById('images_api_code').innerHTML = 'This is Ruby';
	
	document.getElementById('reference_data_api_code').innerHTML = 'v';
	
	document.getElementById('csv_meta_data_api_code').innerHTML = 'This is Ruby';
	
	document.getElementById('csv_api_code').innerHTML = 'This is Ruby';
	
	document.getElementById('dispatch_items_api_code').innerHTML = 'This is Ruby';
	
	document.getElementById('submission_push_notifications_api_code').innerHTML = 'This is Ruby';
	
	document.getElementById('error_codes_api_code').innerHTML = 'This is Ruby';
};

var changeToPython = function () {
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


var changeToPHP = function () {
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


var changeToJava = function () {
	document.getElementById('forms_api_code').innerHTML = 'This is Java'
	
	document.getElementById('submissions_api_code').innerHTML = 'This is Java';
	
	document.getElementById('images_api_code').innerHTML = 'This is Java';
	
	document.getElementById('reference_data_api_code').innerHTML = 'This is Java';
	
	document.getElementById('csv_meta_data_api_code').innerHTML = 'This is Java';
	
	document.getElementById('csv_api_code').innerHTML = 'This is Java';
	
	document.getElementById('dispatch_items_api_code').innerHTML = 'This is Java';
	
	document.getElementById('submission_push_notifications_api_code').innerHTML = 'This is Java';
	
	document.getElementById('error_codes_api_code').innerHTML = 'This is Java';
};

var changeToNode = function () {
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

var changeToSwift = function () {
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

var changeToCpp = function () {
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