import React from 'react'


const Bonde = ({ size, inverted, title }) => (
  <svg
    id='Layer_1'
    xmlns='http://www.w3.org/2000/svg'
    width={size || '200'}
    viewBox='0 0 200 100'
    values={title}
  >
    <path fill={inverted ? '#FFF' : '#000'} d='M44.948,52.505c0-11.641,9.21-20.568,20.568-20.568c11.357,0,20.567,8.927,20.567,20.568 c0,11.639-9.21,20.568-20.567,20.568C54.158,73.073,44.948,64.144,44.948,52.505z M77.042,52.505 c0-7.064-5.084-11.754-11.525-11.754c-6.442,0-11.527,4.689-11.527,11.754c0,7.062,5.085,11.752,11.527,11.752 C71.958,64.257,77.042,59.567,77.042,52.505z' />
    <path fill={inverted ? '#FFF' : '#000'} d='M122.243,32.727V72.28h-6.78l-15.255-21.473V72.28h-9.042V32.727h6.781l15.255,21.471V32.727H122.243z' />
    <path fill={inverted ? '#FFF' : '#000'} d='M164.056,52.505c0,11.188-8.307,19.775-19.212,19.775h-15.821V32.727h15.821 C155.749,32.727,164.056,41.315,164.056,52.505z M155.354,52.505c0-6.781-4.295-11.076-10.51-11.076h-6.78v22.15h6.78 C151.059,63.579,155.354,59.284,155.354,52.505z' />
    <path fill={inverted ? '#FFF' : '#000'} d='M194,63.579v8.701h-24.862V32.727h24.579v8.702h-15.538v6.555h14.127v8.59h-14.127v7.006H194z' />
    <path fill={inverted ? '#FFF' : '#000'} d='M40.937,59.731c0,7.381-6.012,12.203-13.453,12.203H9.981V30.263h16.311c7.264,0,13.156,4.704,13.156,11.906 c0,3.454-1.369,6.192-3.632,8.157C38.913,52.288,40.937,55.505,40.937,59.731z M19.505,39.193v7.381h6.787 c2.145,0,3.633-1.546,3.633-3.691c0-2.142-1.43-3.69-3.633-3.69H19.505z M31.413,59.017c0-2.322-1.549-3.988-3.93-3.988h-7.979 v7.979h7.979C29.864,63.007,31.413,61.339,31.413,59.017z' />
    <path fill={inverted ? '#FFF' : '#000'} d='M40.196,59.274c0,7.383-6.014,12.205-13.453,12.205H9.239V29.807h16.312c7.265,0,13.157,4.704,13.157,11.907 c0,3.452-1.369,6.191-3.632,8.156C38.173,51.835,40.196,55.048,40.196,59.274z M18.765,38.738v7.382h6.786 c2.144,0,3.632-1.548,3.632-3.691c0-2.144-1.428-3.691-3.632-3.691H18.765z M30.671,58.562c0-2.322-1.548-3.988-3.928-3.988 h-7.979v7.977h7.979C29.123,62.55,30.671,60.882,30.671,58.562z' />
    <path fill={inverted ? '#FFF' : '#000'} d='M39.456,58.813c0,7.381-6.014,12.203-13.454,12.203H8.499V29.345h16.312c7.264,0,13.157,4.703,13.157,11.907 c0,3.453-1.369,6.191-3.632,8.155C37.432,51.372,39.456,54.585,39.456,58.813z M18.024,38.275v7.382h6.786 c2.144,0,3.632-1.548,3.632-3.691s-1.43-3.691-3.632-3.691H18.024z M29.93,58.099c0-2.322-1.546-3.988-3.928-3.988h-7.978v7.975 h7.978C28.384,62.085,29.93,60.419,29.93,58.099z' />
    <path fill={inverted ? '#FFF' : '#000'} d='M41.679,60.188c0,7.381-6.014,12.201-13.454,12.201H10.722V30.719h16.311c7.264,0,13.156,4.704,13.156,11.907 c0,3.453-1.369,6.192-3.631,8.155C39.654,52.745,41.679,55.962,41.679,60.188z M20.247,39.649v7.382h6.785 c2.145,0,3.633-1.548,3.633-3.69c0-2.143-1.43-3.691-3.633-3.691H20.247z M32.153,59.472c0-2.322-1.548-3.988-3.929-3.988 h-7.978v7.979h7.978C30.605,63.462,32.153,61.794,32.153,59.472z' />
    <path fill={inverted ? '#FFF' : '#000'} d='M38.714,58.358c0,7.383-6.012,12.205-13.453,12.205H7.758V28.89h16.312c7.264,0,13.156,4.704,13.156,11.907 c0,3.453-1.369,6.192-3.631,8.155C36.691,50.917,38.714,54.132,38.714,58.358z M17.284,37.821v7.381h6.785 c2.145,0,3.633-1.548,3.633-3.691s-1.43-3.69-3.633-3.69H17.284z M29.19,57.644c0-2.322-1.549-3.99-3.93-3.99h-7.977v7.98h7.977 C27.642,61.634,29.19,59.966,29.19,57.644z' />
    <path fill={inverted ? '#FFF' : '#000'} d='M37.974,57.903c0,7.383-6.012,12.203-13.453,12.203H7.019V28.435h16.311c7.264,0,13.156,4.704,13.156,11.907 c0,3.453-1.369,6.192-3.631,8.157C35.95,50.462,37.974,53.677,37.974,57.903z M16.542,37.365v7.383h6.787 c2.145,0,3.631-1.548,3.631-3.692s-1.428-3.691-3.631-3.691H16.542z M28.448,57.19c0-2.324-1.547-3.99-3.928-3.99h-7.979v7.977 h7.979C26.901,61.177,28.448,59.511,28.448,57.19z' />
    <path fill={inverted ? '#FFF' : '#000'} d='M37.233,57.45c0,7.381-6.014,12.201-13.454,12.201H6.276v-41.67h16.312c7.264,0,13.155,4.703,13.155,11.907 c0,3.453-1.369,6.191-3.631,8.156C35.21,50.007,37.233,53.222,37.233,57.45z M15.802,36.912v7.381h6.787 c2.143,0,3.631-1.548,3.631-3.691c0-2.142-1.429-3.69-3.631-3.69H15.802z M27.708,56.733c0-2.32-1.548-3.988-3.929-3.988h-7.978 v7.979h7.978C26.16,60.724,27.708,59.056,27.708,56.733z' />
    <g><polygon fill={inverted ? '#FFF' : '#000'} points='6.276,69.651 11.072,73.065 11.462,71.479 6.704,68.45 6.28,68.206' /></g>
    <g><polygon fill={inverted ? '#000' : '#FFF'} points='6.276,55.521 11.462,58.956 11.462,57.267 6.704,54.235 6.28,53.995' /></g>
    <g><polygon fill={inverted ? '#000' : '#FFF'} points='6.276,52.792 11.462,56.022 11.462,50.519 6.704,47.488 6.28,47.246' /></g>
    <g><polygon fill={inverted ? '#000' : '#FFF'} points='11.854,30.988 6.276,27.981 8.501,27.981 14.479,30.988' /></g>
    <g>
      <path fill={inverted ? '#000' : '#FFF'} d='M42.419,60.458c0,7.381-6.014,12.201-13.455,12.201H11.462V30.988h16.312 c7.262,0,13.154,4.704,13.154,11.906c0,3.453-1.368,6.192-3.631,8.157C40.396,53.015,42.419,56.229,42.419,60.458z M20.987,39.919V47.3h6.787c2.143,0,3.631-1.547,3.631-3.69c0-2.144-1.429-3.691-3.631-3.691H20.987z M32.894,59.741 c0-2.322-1.549-3.988-3.93-3.988h-7.977v7.977h7.977C31.345,63.729,32.894,62.063,32.894,59.741z' />
      <path fill={inverted ? '#FFF' : '#000'} d='M28.964,73.104H11.019v-42.56h16.756c7.88,0,13.6,5.194,13.6,12.35c0,3.204-1.158,5.993-3.356,8.103 c3.13,2.191,4.846,5.527,4.846,9.461C42.863,67.784,37.018,73.104,28.964,73.104z M11.907,72.216h17.057 c7.539,0,13.011-4.945,13.011-11.758c0-3.814-1.745-7.021-4.914-9.033l-0.503-0.318l0.449-0.391 c2.276-1.977,3.479-4.68,3.479-7.821c0-6.642-5.346-11.462-12.711-11.462H11.907V72.216z M28.964,64.175h-8.421V55.31h8.421 c2.575,0,4.373,1.822,4.373,4.432S31.539,64.175,28.964,64.175z M21.432,63.286h7.532c2.086,0,3.486-1.424,3.486-3.545 c0-2.119-1.4-3.545-3.486-3.545h-7.532V63.286z M27.774,47.745h-7.231v-8.27h7.231c2.398,0,4.074,1.7,4.074,4.134 C31.849,46.006,30.136,47.745,27.774,47.745z M21.432,46.857h6.343c1.877,0,3.188-1.336,3.188-3.247 c0-1.942-1.281-3.247-3.188-3.247h-6.343V46.857z' />
    </g>
    <g>
      <path fill={inverted ? '#000' : '#FFF'} d='M259.224,51.742c0-11.267,8.915-19.909,19.909-19.909c10.993,0,19.908,8.642,19.908,19.909 c0,11.269-8.915,19.909-19.908,19.909C268.139,71.651,259.224,63.011,259.224,51.742z M290.29,51.742 c0-6.837-4.923-11.376-11.157-11.376c-6.235,0-11.158,4.54-11.158,11.376c0,6.838,4.923,11.377,11.158,11.377 C285.367,63.119,290.29,58.58,290.29,51.742z' />
      <path fill={inverted ? '#000' : '#FFF'} d='M334.043,32.599v38.287h-6.563l-14.768-20.785v20.785h-8.752V32.599h6.565l14.765,20.784V32.599H334.043z' />
      <path fill={inverted ? '#000' : '#FFF'} d='M374.515,51.742c0,10.83-8.042,19.144-18.596,19.144h-15.316V32.599h15.316 C366.473,32.599,374.515,40.914,374.515,51.742z M366.092,51.742c0-6.562-4.155-10.72-10.173-10.72h-6.564v21.441h6.564 C361.937,62.463,366.092,58.307,366.092,51.742z' />
      <path fill={inverted ? '#000' : '#FFF'} d='M403.5,62.463v8.423h-24.064V32.599h23.79v8.423h-15.041v6.344h13.675v8.315h-13.675v6.782H403.5z' />
      <path fill={inverted ? '#000' : '#FFF'} d='M255.342,58.738c0,7.146-5.82,11.812-13.023,11.812h-16.942V30.214h15.789 c7.031,0,12.735,4.553,12.735,11.524c0,3.343-1.326,5.994-3.516,7.896C253.383,51.533,255.342,54.646,255.342,58.738z M234.598,38.857v7.146h6.567c2.075,0,3.517-1.498,3.517-3.572c0-2.077-1.385-3.574-3.517-3.574H234.598z M246.12,58.047 c0-2.247-1.498-3.861-3.802-3.861h-7.721v7.721h7.721C244.622,61.906,246.12,60.293,246.12,58.047z' />
      <path fill={inverted ? '#000' : '#FFF'} d='M254.625,58.297c0,7.146-5.821,11.813-13.023,11.813h-16.942V29.774h15.788 c7.03,0,12.735,4.552,12.735,11.525c0,3.341-1.325,5.992-3.516,7.895C252.665,51.094,254.625,54.205,254.625,58.297z M233.877,38.417v7.146h6.57c2.076,0,3.517-1.5,3.517-3.574s-1.383-3.573-3.517-3.573H233.877z M245.403,57.605 c0-2.247-1.497-3.86-3.802-3.86h-7.725v7.722h7.725C243.906,61.467,245.403,59.853,245.403,57.605z' />
      <path fill={inverted ? '#000' : '#FFF'} d='M253.907,57.85c0,7.145-5.821,11.812-13.022,11.812h-16.941V29.325h15.788 c7.03,0,12.734,4.553,12.734,11.526c0,3.34-1.325,5.993-3.515,7.894C251.948,50.646,253.907,53.757,253.907,57.85z M233.161,37.97v7.146h6.57c2.074,0,3.515-1.5,3.515-3.573c0-2.074-1.383-3.573-3.515-3.573H233.161z M244.688,57.158 c0-2.249-1.498-3.861-3.803-3.861h-7.724v7.721h7.724C243.189,61.018,244.688,59.405,244.688,57.158z' />
      <path fill={inverted ? '#000' : '#FFF'} d='M256.059,59.18c0,7.145-5.82,11.812-13.022,11.812h-16.943V30.654h15.789 c7.031,0,12.733,4.554,12.733,11.526c0,3.341-1.323,5.993-3.513,7.894C254.1,51.977,256.059,55.089,256.059,59.18z M235.313,39.3v7.145h6.568c2.075,0,3.517-1.497,3.517-3.572c0-2.076-1.385-3.573-3.517-3.573H235.313z M246.839,58.488 c0-2.248-1.5-3.862-3.803-3.862h-7.723v7.722h7.723C245.339,62.348,246.839,60.734,246.839,58.488z' />
      <path fill={inverted ? '#000' : '#FFF'} d='M253.19,57.41c0,7.146-5.821,11.812-13.023,11.812h-16.94V28.886h15.788 c7.03,0,12.734,4.553,12.734,11.525c0,3.343-1.325,5.994-3.515,7.895C251.231,50.207,253.19,53.319,253.19,57.41z M232.445,37.53v7.145h6.569c2.075,0,3.515-1.497,3.515-3.572c0-2.076-1.383-3.573-3.515-3.573H232.445z M243.971,56.718 c0-2.247-1.5-3.861-3.804-3.861h-7.722v7.723h7.722C242.471,60.579,243.971,58.965,243.971,56.718z' />
      <path fill={inverted ? '#000' : '#FFF'} d='M252.473,56.969c0,7.146-5.819,11.812-13.022,11.812h-16.942V28.444h15.789 c7.032,0,12.734,4.553,12.734,11.525c0,3.342-1.325,5.994-3.514,7.895C250.514,49.767,252.473,52.878,252.473,56.969z M231.729,37.088v7.146h6.568c2.076,0,3.516-1.498,3.516-3.573c0-2.074-1.383-3.574-3.516-3.574H231.729z M243.253,56.277 c0-2.247-1.498-3.86-3.803-3.86h-7.722v7.722h7.722C241.755,60.139,243.253,58.523,243.253,56.277z' />
      <path fill={inverted ? '#000' : '#FFF'} d='M251.756,56.528c0,7.145-5.818,11.813-13.022,11.813h-16.942V28.005h15.789 c7.031,0,12.734,4.552,12.734,11.525c0,3.342-1.326,5.993-3.516,7.895C249.796,49.326,251.756,52.437,251.756,56.528z M231.011,36.648v7.146h6.569c2.076,0,3.515-1.497,3.515-3.573c0-2.074-1.383-3.573-3.515-3.573H231.011z M242.535,55.837 c0-2.247-1.497-3.86-3.802-3.86h-7.723v7.722h7.723C241.038,59.698,242.535,58.084,242.535,55.837z' />
      <g><polygon fill={inverted ? '#000' : '#FFF'} points='221.791,68.342 226.433,71.647 226.811,70.11 222.205,67.176 221.794,66.942' /></g>
      <g><polygon fill={inverted ? '#FFF' : '#000'} points='221.791,54.664 226.811,57.988 226.811,56.354 222.205,53.42 221.794,53.187' /></g>
      <g><polygon fill={inverted ? '#FFF' : '#000'} points='221.791,52.021 226.811,55.15 226.811,49.821 222.205,46.888 221.794,46.652' /></g>
      <g><polygon fill={inverted ? '#FFF' : '#000'} points='227.19,30.915 221.791,28.005 223.943,28.005 229.731,30.915' /></g>
      <g>
        <path fill={inverted ? '#FFF' : '#000'} d='M256.774,59.44c0,7.145-5.819,11.812-13.022,11.812h-16.941V30.915h15.788c7.031,0,12.734,4.554,12.734,11.526 c0,3.341-1.324,5.994-3.514,7.894C254.816,52.237,256.774,55.349,256.774,59.44z M236.03,39.561v7.146h6.568 c2.076,0,3.516-1.5,3.516-3.574c0-2.074-1.384-3.571-3.516-3.571H236.03z M247.555,58.749c0-2.248-1.499-3.861-3.803-3.861 h-7.722v7.722h7.722C246.056,62.609,247.555,60.995,247.555,58.749z' />
        <path fill={inverted ? '#000' : '#FFF'} d='M243.752,71.648h-17.338V30.52h16.185c7.608,0,13.131,5.013,13.131,11.921 c0,3.107-1.127,5.808-3.269,7.847c3.042,2.112,4.709,5.345,4.709,9.152C257.17,66.514,251.528,71.648,243.752,71.648z M227.206,70.856h16.546c7.317,0,12.628-4.802,12.628-11.416c0-3.702-1.695-6.818-4.772-8.769l-0.449-0.285l0.4-0.349 c2.211-1.92,3.379-4.547,3.379-7.596c0-6.448-5.188-11.13-12.339-11.13h-15.393V70.856z M243.752,63.007h-8.117v-8.515h8.117 c2.474,0,4.198,1.751,4.198,4.257C247.95,61.253,246.226,63.007,243.752,63.007z M236.425,62.214h7.327 c2.038,0,3.408-1.393,3.408-3.465c0-2.073-1.37-3.465-3.408-3.465h-7.327V62.214z M242.599,47.102h-6.964v-7.937h6.964 c2.303,0,3.911,1.632,3.911,3.968C246.51,45.433,244.864,47.102,242.599,47.102z M236.425,46.31h6.174 c1.837,0,3.12-1.307,3.12-3.178c0-1.898-1.253-3.176-3.12-3.176h-6.174V46.31z' />
      </g>
    </g>
  </svg>
)

Bonde.displayName = 'IconColorful.Bonde'

export default Bonde
