import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  imgURL: any;
  email: any;
  firstName: any;
  lastName: any;
  country: any;
  city: any;
  school: any;
  qulification: any;
  nickName: any;
  occupation: any;
  selfSummary : any;
  industry: any;
  skills : string[];
  id : any;
  form: FormGroup;
  qulificationLists = [
    "HighSchool Graduation",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctoral Degree",
  ]

  industryLists = [
    "Front-End Engineer",
    "Back-End Engineer",
    "Full Stack Engineer",
    "DevOps Engineer",
    "Security Engineer"
  ]

  occupationLists = [
    "Full-time Worker",
    "Freelancer",
    "Student"
  ]

  countryLists = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Myanmar", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"]

  skillsLists = [
    "Java", "JavaScript", "TypeScript", "HTML", "CSS", "Angular", "React", "Spring", "NodeJS"
  ]

  constructor(
    private dataService: UserInfoService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {

    let id: any = this.activeRoute.snapshot.paramMap.get('id');
    this.dataService.currentId = id;
    
    this.dataService.getSingleData('profileInfo', id).pipe(
      catchError(
        error => this.router.navigate(['/'])
      )
    ).subscribe(
      (res: any) => {
        this.firstName = res['firstName'];
        this.lastName = res['lastName'];
        this.imgURL = res['profileImg'];
        this.country = res['country'];
        this.city = res['city'];
        this.school = res['school'];
        this.qulification = res['qulification'];
        this.nickName = res['nickName'];
        this.occupation = res['occupation'];
        this.industry = res['industry'];
        this.email = res['email'];
        this.selfSummary = res['selfSummary'];
        this.skills = res['skill'];
        this.id = res['id'];

        if (this.imgURL.length == 0) {
          this.imgURL = '../../assets/img/default_profile.png'
        }

        //Construct form for edition
        this.form = this.builder.group({

          firstName : this.builder.control( this.firstName,[
            Validators.required,
            Validators.minLength(4)
          ]),
    
          lastName : this.builder.control(this.lastName,[
            Validators.required,
          ]),
  
          school: this.builder.control( this.school, [
            Validators.required
          ]),
          qulification: this.builder.control(this.qulification, [
            Validators.required
          ]),
          nickName: this.builder.control(this.nickName, [
            Validators.required
          ]),
          occupation: this.builder.control(this.occupation, [
            Validators.required
          ]),
          selfSummary: this.builder.control(this.selfSummary),
          industry: this.builder.control(this.industry, [
            Validators.required
          ]),
          country: this.builder.control(this.country, [
            Validators.required
          ]),
          city: this.builder.control(this.city, [
            Validators.required
          ])
        })     
      })
      }

      get firstName2() : any{
        return this.form.get('firstName');
      }
    
      get lastName2() : any {
        return this.form.get('lastName')
      }
    
      get school2(): any {
        return this.form.get('school')
      }
    
      get qulification2(): any {
        return this.form.get('qulification')
      }
    
      get nickName2(): any {
        return this.form.get('nickName')
      }
      get occupation2(): any {
        return this.form.get('occupation')
      }
      get selfSummary2(): any {
        return this.form.get('selfSummary')
      }
      get industry2(): any {
        return this.form.get('industry')
      }
      get country2(): any {
        return this.form.get('country')
      }
      get city2(): any {
        return this.form.get('city')
      }

      onSubmit(){
        
        const profileInfo = {
          firstName : this.firstName2.value,
          lastName : this.lastName2.value,
          email : this.email,
          school : this.school2.value,
          qulification : this.qulification2.value,
          nickName :  this.nickName2.value,
          occupation : this.occupation2.value,
          selfSummary : this.selfSummary2.value,
          industry : this.industry2.value,
          country : this.country2.value,
          city : this.city2.value,
          skill : this.skills,
          profileImg : this.imgURL
        }
        this.dataService.updateData(profileInfo,"profileInfo",this.id).pipe(
          catchError(error => "Update profile wrong")
        ).subscribe( res => {
          this.router.routeReuseStrategy.shouldReuseRoute = function(){
            return false;
          }
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/profile', this.id])
          }
        )
      }

      onChange(skill : string, target : EventTarget | any){

        const isChecked = (target as HTMLInputElement).checked;
        if(isChecked){
          this.skills.push(skill)
        } else{ 
          this.skills = this.skills.filter(element => element !== skill);
        }
      }
}


