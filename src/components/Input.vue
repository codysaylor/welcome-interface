<template>
  <div class="hello">
    <h1>Leading Provider in Managed Safety Footwear Programs</h1>
    <p>Please enter the code you were provided.</p>
    <transition name="component-fade">
      <div v-if="error" class="alert alert-danger">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Oops!</strong> That's not a valid code. Confused? <a href="#" data-toggle="modal" data-target="#myModal" class="light">Learn more</a> or contact us at 1-800-444-4086 or customfit@lehighoutfitters.com.
      </div>
    </transition>
    <input v-for="(input, index) in inputs" v-model="input.val" :id="index" @focus="$event.target.select()" @keyup="next" size="1" maxlength="1" type="text">
    <a href="#" class="question" data-toggle="modal" data-target="#myModal">What is a managed safety footwear program?</a>
    <button type="button" class="btn btn-success block" data-toggle="modal" data-target="#myModal2">Request A Demo</button>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 class="modal-title">What is a managed safety footwear program?</h3>
          </div>
          <div class="modal-body tal">
            <p>Lehigh CustomFit, a subdivision of Rocky Brands and Lehigh Outfitters, provides managed safety footwear programs.</p>
            <p>We offer the tools you'll need to ensure your employees are comfortable, confident, productive, and most importantly safe on the job. With over 60 brands &amp; 2000 styles, free shipping &amp; returns, and a custom website, managing your safety footwear program has never been so easy.</p>
            <p>Some of the features we offer include:</p>
            <ul>
              <li>On-site kiosks</li>
              <li>Vouchers</li>
              <li>Data exchange</li>
              <li>Multi-employee ordering</li>
              <li>Automatic email notifications</li>
              <li>Subsidy &amp; payroll deduction</li>
            </ul>
            <p>We provide this service <b>for free</b> and are able to offer the lowest prices on the market in addition to a custom website for your employees.</p>
            <div class="text-center">
              <button type="button" class="btn btn-success demo" data-dismiss="modal" data-toggle="modal" data-target="#myModal2">Request A Demo</button>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal2" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 class="modal-title">Interested in CustomFit</h3>
          </div>
          <div class="modal-body tal">
            <p>Awesome! Glad to hear you're interested in your own, free CustomFit website to offer and manage your employee safety footwear program. Please give us a call / email or send us your contact information and we'll be in touch.</p>
            <div style="font-size: 1.4em; margin: 1em 0 1em 5em;">
              <p><i class="material-icons">phone</i> 1-800-444-4086</p>
              <p><i class="material-icons">email</i> customfit@lehighoutfitters.com</p>
            </div>
            <form>
              <div class="inputs">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="email" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" placeholder="Email">
                </div>
              </div>
              <button type="submit" class="btn btn-large btn-block btn-default">Tell Me More</button>
            </form>
            <!-- <p><form id="mktoForm_2556"></form></p> -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    inputs() {
      return this.$store.state.inputs;
    },
    error() {
      return this.$store.state.error;
    }
  },
  methods: {
    next: function(e) {
      // Update code
      this.$store.state.code = this.$store.state.inputs.map(function(e){
        return e.val;
      }).join("");
      // Tab to next input
      let i = e.target.id; // Current input
      let next = document.getElementById(Number(i)+1); // Next input
      let tempCode = '';
      if (e.which <= 90 && e.which >= 48) { // is alphanumeric
        e.preventDefault();
        this.$store.state.inputs[i].val = e.key; // Input data
        if (next)
          next.focus(); // Tab to next
      } else { // Not alphanumeric
        if (e.tab)
          next.focus(); // Tab to next
      }
      if (this.$store.state.code.length == 4) { // Full code
        this.$store.state.codeFull = true;
        for (let i = 0; i < this.$store.state.reps.length; i++) {
          if (this.$store.state.code === this.$store.state.reps[i].code) { // Valid code
            this.$store.state.error = false;
            this.$store.state.comp = 'rep';
            console.log(this.$store.state.comp);
            break;
          } else { // Invalid code
            this.$store.state.error = true;
            console.log(this.$store.state.comp);
          }
        }
      } else { // Not full code
        this.$store.state.codeFull = false;
        this.$store.state.comp = 'app-input';
      }
    }
  }
}
</script>

<style scoped>
</style>
