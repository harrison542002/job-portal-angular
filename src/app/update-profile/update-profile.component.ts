import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfoService } from '../user-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  error : boolean = false;
  email : any;
  imgURL: string = "";
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

  skills : string[] = [];

  constructor(
    private builder: FormBuilder,
    private dataService : UserInfoService,
    private activeRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {

    let id : any = this.activeRoute.snapshot.paramMap.get('id');

    this.dataService.getSingleData('userData', id)
    .pipe(
      catchError(error => this.router.navigate(['/']))
    )
    .subscribe((res : any)=>{
      
      this.email = res['email'] ;
      this.form = this.builder.group({

        firstName : this.builder.control('',[
          Validators.required,
          Validators.minLength(4)
        ]),
  
        lastName : this.builder.control('',[
          Validators.required,
        ]),

        school: this.builder.control('', [
          Validators.required
        ]),
        qulification: this.builder.control('', [
          Validators.required
        ]),
        nickName: this.builder.control('', [
          Validators.required
        ]),
        occupation: this.builder.control('', [
          Validators.required
        ]),
        selfSummary: this.builder.control(''),
        industry: this.builder.control('', [
          Validators.required
        ]),
        country: this.builder.control('', [
          Validators.required
        ]),
        city: this.builder.control('', [
          Validators.required
        ]),
        profileImg : this.builder.control(null),
      })
    })

  }

  get firstName() : any{
    return this.form.get('firstName');
  }

  get lastName() : any {
    return this.form.get('lastName')
  }

  get school(): any {
    return this.form.get('school')
  }

  get qulification(): any {
    return this.form.get('qulification')
  }

  get nickName(): any {
    return this.form.get('nickName')
  }
  get occupation(): any {
    return this.form.get('occupation')
  }
  get selfSummary(): any {
    return this.form.get('selfSummary')
  }
  get industry(): any {
    return this.form.get('industry')
  }
  get country(): any {
    return this.form.get('country')
  }
  get city(): any {
    return this.form.get('city')
  }
  get profileImg() : any{
    return this.form.get('profileImg')
  }

  onSubmit() {

    const profileInfo = {
      firstName : this.firstName.value,
      lastName : this.lastName.value,
      email : this.email,
      school : this.school.value,
      qulification : this.qulification.value,
      nickName :  this.nickName.value,
      occupation : this.occupation.value,
      selfSummary : this.selfSummary.value,
      industry : this.industry.value,
      country : this.country.value,
      city : this.city.value,
      skill : this.skills,
      profileImg : this.imgURL
    }

    this.dataService.postData(profileInfo,'profileInfo').subscribe((res : any)=>{
      this.router.navigate(['/profile', res['id']])
    })
  }

  onChange(skill : string, target : EventTarget | any){

    const isChecked = (target as HTMLInputElement).checked;

    if(isChecked){
      this.skills.push(skill)
    } else{ 
      this.skills = this.skills.filter(element => element !== skill);
    }

  }

  async showPreview(event : any) {

    if(event){

      const data : any = event.target as HTMLInputElement;
      const file = data.files[0];
      if( Number(file.size) > 80000 ){
        this.error = true;
        return;
      } else{
        this.error = false;
        this.form.patchValue({
          profileImg: file
        });
        this.form.get('profileImg')!.updateValueAndValidity()
        
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
          this.imgURL = reader.result as string;
        }
        await reader.readAsDataURL(file);
  
      }
      } 
  }

}
