---
layout: styleguide
title: The Grid
weight: 1
---
The grid is built on the concept of percentages of the whole row rather than columns. If you want an area 25% of the width, use `.col-25`, `.col-60` for 60%, and so on.

Available options are: 10, 20, 25, 30, 33, 40, 50, 60, 66, 70, 75, 80, 90, and 100.

<h2>Basic Sizes</h2>
<div class="grid-sample">
  <div class="row">
    <div class="col-100"></div>
  </div>
  <div class="row">
    <div class="col-50"></div>
    <div class="col-50"></div>
  </div>
  <div class="row">
    <div class="col-33"></div>
    <div class="col-33"></div>
    <div class="col-33"></div>
  </div>
  <div class="row">
    <div class="col-25"></div>
    <div class="col-25"></div>
    <div class="col-25"></div>
    <div class="col-25"></div>
  </div>
  <div class="row">
    <div class="col-20"></div>
    <div class="col-20"></div>
    <div class="col-20"></div>
    <div class="col-20"></div>
    <div class="col-20"></div>
  </div>
  <div class="row">
    <div class="col-10"></div>
    <div class="col-10"></div>
    <div class="col-10"></div>
    <div class="col-10"></div>
    <div class="col-10"></div>
    <div class="col-10"></div>
    <div class="col-10"></div>
    <div class="col-10"></div>
    <div class="col-10"></div>
    <div class="col-10"></div>
  </div>

  <h3>ODD Combinations</h3>
  <div class="row">
    <div class="col-20"></div>
    <div class="col-80"></div>
  </div>
  <div class="row">
    <div class="col-20"></div>
    <div class="col-60"></div>
    <div class="col-20"></div>
  </div>
  <div class="row">
    <div class="col-20"></div>
    <div class="col-40"></div>
    <div class="col-20"></div>
    <div class="col-10"></div>
    <div class="col-10"></div>
  </div>
  <div class="row">
    <div class="col-75"></div>
    <div class="col-25"></div>
  </div>
  <div class="row">
    <div class="col-25"></div>
    <div class="col-50"></div>
    <div class="col-25"></div>
  </div>
  <div class="row">
    <div class="col-30"></div>
    <div class="col-30"></div>
    <div class="col-30"></div>
    <div class="col-10"></div>
  </div>
  <div class="row">
    <div class="col-50"></div>
    <div class="col-25"></div>
    <div class="col-25"></div>
  </div>
  <div class="row">
    <div class="col-66"></div>
    <div class="col-33"></div>
  </div>
  <div class="row">
    <div class="col-33"></div>
    <div class="col-66"></div>
  </div>

  <h4>Ommitting Columns is Okay <small>(but they'll always float left)</small></h4>
  <div class="row">
    <div class="col-33"></div>
  </div>
  <div class="row">
    <div class="col-66"></div>
  </div>

  <h2>Offsets</h2>
  <div class="row">
    <div class="col-66 offset-33"></div>
  </div>
  <div class="row">
    <div class="col-50 offset-50"></div>
  </div>
  <div class="row">
    <div class="col-33 offset-66"></div>
  </div>
  <div class="row">
    <div class="col-33"></div>
    <div class="col-33 offset-33"></div>
  </div>
  <div class="row">
    <div class="col-33 offset-33"></div>
  </div>
  <h2>Nested Grids</h2>
  <div class="row">
    <div class="col-50">
      <div class="row">
        <div class="col-33"></div>
        <div class="col-66"></div>
      </div>
    </div>
    <div class="col-50">
      <div class="row">
        <div class="col-33"></div>
        <div class="col-66"></div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-66">
      <div class="row">
        <div class="col-33"></div>
        <div class="col-66"></div>
      </div>
    </div>
    <div class="col-33">
      <div class="row">
        <div class="col-50"></div>
        <div class="col-50"></div>
      </div>
    </div>
  </div>
</div>

<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript">
$( document ).ready(function() {
  $('.row div').not('.row').each(function(){
    var t = $(this).attr("class");
    var t = t.replace(" ", ".");
    $(this).prepend('.' + t);
  });
});
</script>