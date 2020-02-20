# Age-validation-module-jaquery-form-validator
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Frakibhstu%2FAge-validation-module-jaquery-form-validator)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Frakibhstu%2FAge-validation-module-jaquery-form-validator)


[![GitHub stars](https://img.shields.io/github/stars/rakibhstu/Age-validation-module-jaquery-form-validator)](https://github.com/rakibhstu/Age-validation-module-jaquery-form-validator/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/rakibhstu/Age-validation-module-jaquery-form-validator)](https://github.com/rakibhstu/Age-validation-module-jaquery-form-validator/network)
[![GitHub issues](https://img.shields.io/github/issues/rakibhstu/Age-validation-module-jaquery-form-validator)](https://github.com/rakibhstu/Age-validation-module-jaquery-form-validator/issues)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Frakibhstu%2FAge-validation-module-jaquery-form-validator)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Frakibhstu%2FAge-validation-module-jaquery-form-validator)

Age validation module for [jQuery form validator](http://www.formvalidator.net/). Example output,
![alt text](https://github.com/rakibhstu/Age-validation-module-jaquery-form-validator/age-validator.JPG "")


## Configuration

Add jQuery [if not exist] and jQuery form validaton library in your project
```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>
```
You can add inline age.js or include
```
<script src="<path>/age.js"></script>
```

## Usage
Basic example of age validation. Add `age` rule inside `data-validation` attribute.
```
<div class="form-group">
    <label class="col-sm-5" for="dob"> Date of Birth</label>
    <div class="col-sm-7">
        <input class="datepicker form-control"  data-validation="required age date" value="" data-validation-format="yyyy-mm-dd" />
    </div>
</div>
```

You can see other validation rules [here](http://www.formvalidator.net/).