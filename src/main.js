import { Entry } from './journal.js';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#journal-body').val();
    var newEntry = new Entry(title, body);
    $("#journal-data").append("<tr>" +
                                "<td>" + newEntry.title + "</td>" +
                                "<td>" + newEntry.wordCount() + "</td>" +
                                "<td>" + newEntry.vowelCount() + "</td>" +
                                "<td>" + newEntry.consonantCount() + "</td>" +
                                "<td>" + newEntry.getTeaser() + "</td>" +
                              "</tr>");
  });
});
