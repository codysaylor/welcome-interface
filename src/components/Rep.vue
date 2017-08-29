<template>
  <div class="rep">
    <div class="alert alert-success mt1">
      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
      Hello<span v-if="!lead.name">,</span> {{lead.name}}<span v-if="lead.name">,</span> Thanks for checking in. Please let me know if I can answer any questions you may have about Lehigh CustomFit.
    </div>
    <h1>About Lehigh CustomFit - Free Safety Footwear Program</h1>
    <p>Hello, I recently called you about Lehigh CustomFit - The Leader in Safety Footwear Programs. We think you'd be a perfect candidate for our <strong>FREE program</strong> to help you reduce your liability and help keep your employees safe on the job.</p>
    <p>CustomFit gives you a custom website which allows you to limit and customize your employees footwear selection from over 2000 safety shoes and 60 brands. We also give you the tools required to ensure what, when, and if your employees utilized the service.</p>
    <p>There are many more features we offer including:</p>
    <ul>
      <li>On-site kiosks</li>
      <li>Vouchers</li>
      <li>Data exchange</li>
      <li>Multi-employee ordering</li>
      <li>Automatic email notifications</li>
      <li>Subsidy &amp; payroll deduction</li>
    </ul>
    <h2>
      Interested in CustomFit?
    </h2>
    <div class="flex" v-for="rep in reps" v-if="code == rep.code">
        <img :src="rep.image" alt="" style="width: 80px; height: auto; flex-shrink: 0;">
        <div style="width: 100%;">
          <p style="font-size: 1.4em; margin-bottom: 0;">{{rep.name}}</p>
          <p style="font-size: 1.2em; margin-bottom: 0;"><i class="material-icons">phone</i> {{rep.phone}}</p>
          <p style="font-size: 1.2em; margin-bottom: 0;" class="truncate"><i class="material-icons">email</i> {{rep.email}}</p>
        </div>
    </div>
    <form>
      <div class="inputs">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="email" class="form-control" id="name" placeholder="Name" v-model="lead.name">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Email">
        </div>
      </div>
      <button type="submit" class="btn btn-large btn-block btn-default">Tell Me More</button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    lead() { return this.$store.state.comp; },
    reps() { return this.$store.state.reps; },
    code() { return this.$store.state.code; }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created: function() {
    MktoForms2.loadForm("https://app-ab06.marketo.com", "018-APH-439", 2556);
    // Remove Marketo gutters...
    var form = $('.mktoMain');
    MktoForms2.whenReady(function (form) {
      // Put your code that uses the form object here
      $('.mktoGutter').remove();
      $('.mktoForm label').each(function(){
        $(this).insertAfter($(this).next('input').addClass('empty'));
      });

      $('input.empty').blur(function() {
        if ($(this).val().length > 0) {
          $(this).removeClass('empty');
        } else {
          $(this).addClass('empty');
        }
      });
    });
  }
}
</script>

<style scoped>
  form {
    margin-top: 1em;
  }
  img {
    margin-right: 1em;
  }
  .inputs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
            justify-content: space-between;
    width: 100%;
  }
  .rep {
    text-align: left;
  }
  .flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
            justify-content: flex-start;
  }
  @media (min-width: 750px) {
    .flex {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
              flex-direction: row;
      -webkit-box-align: start;
      -ms-flex-align: start;
              align-items: flex-start;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
              justify-content: flex-start;
    }
  }
  .mt1 {
    margin-top: 2em;
  }
</style>
