# Countdown
Simple javascript countdown timer
Created by Edward Aubrey | edward.aubrey@ejaudio.net

======================================================================================

Instructions:

Call the countdown.js in to your page

        <script type="text/javascript" src="countdown.js"></script>
        
Add the following script to set your end time:

        <script>
            //Time to countdown to (YYYY, MM, DD, HH, MM, SS):
            //NOTE (Month counts from 0, so enter the month -1 eg. Jan: 0, Feb: 1...)
            endTime = new Date(2020, 10, 7, 18, 00, 00);
        </script>
        
======================================================================================
        
The timer can either be displayed as a single object:

  The full timer will be written to html id "clock"
  
Or as individual objects:

  The Hour counter will be written to html id "hours"
  
  The Minute counter will be written to html id "minutes"
  
  The Second counter will be written to html id "seconds"
  
======================================================================================

See index.html for an example.
