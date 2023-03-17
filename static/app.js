function convert_to_json() {
  var input_text = document.getElementById('input-text').value;
  var escaped_input_text = input_text.replace(/\\/g, '\\\\')
                                     .replace(/"/g, '\\"')
                                     .replace(/\n/g, '\\n')
                                     .replace(/_/g, '\\_')
                                     .replace(/\*/g, '\\*');
  var json_output = '\"output\":"' + escaped_input_text + '"';
  document.getElementById('output-json').value = json_output;
  document.getElementById('output-json').select();
  document.execCommand('copy');
}
