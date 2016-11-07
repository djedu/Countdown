# Countdown
Simple javascript countdown timer

Instructions:

Call the countdown.js in to your page
        <blockquote>
        <script type="text/javascript" src="countdown.js"></script>
        </blockquote>
Add the following script to set your end time:
        <blockquote>
        <script>
            //Time to countdown to
            endTime = new Date(2016, 10, 7, 18, 00);
        </script>
        </blockquote>
        
The clock can either be displayed as a full object:

  The full timer will be written to html id "clock"
  
Or as individual objects:

  The Hour counter will be written to html id "hours"
  
  The Minute counter will be written to html id "minutes"
  
  The Second counter will be written to html id "seconds"
  
See index.html for an example.
