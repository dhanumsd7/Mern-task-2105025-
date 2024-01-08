export default function SignUp(){
    return (
        <><head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head><></><div className="flex bg-black shadow-md font-white"><ul class="flex ml-auto item-center pr-24 text-1pxl text-white"> 
                <li class="ml-10">Home</li>
                <li class="ml-10">Search</li>
                <li class="ml-10">Guide</li>
                <li class="ml-10">Blog</li>
                <li class="ml-10 px-3 py-1 text-orange-500 border border-orange-500 rounded border-bold">Contact Us</li>
            </ul>
            </div>
        <div className="bg-[url('https://previews.123rf.com/images/dimapolie/dimapolie1805/dimapolie180500002/101816757-vector-e-commerce-pattern-with-word-e-commerce-background.jpg')] flex min-h-screen flex-col items-center justify-center gap-2 bg-slate-300">
            <div className="flex w-max justify-evenly gap-10 bg-slate-50 p-4">
              <div className="flex flex-col items-center gap-4 bg-">
                <h1 className="font-semibold uppercase">Sign up</h1>
                <div className="flex gap-2">
                  <div className="flex min-h-[2rem] min-w-[2rem] justify-center items-center rounded-full bg-white shadow-md">
                    <i className="fa-brands fa-meta"></i>
                  </div>
                  <div className='flex gap-2'>
                    <div className='flex min-h-[2rem] min-w-[2rem] justify-center items-center rounded-full bg-white shadow-md'>
                      <i className='fa-brands fa-google'></i>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <div className='flex min-h-[2rem] min-w-[2rem] justify-center items-center rounded-full bg-white shadow-md'>
                    <i class="fa-solid fa-envelope"></i>
                    </div>
                  </div>
                  
                </div>
                <div className="min-h-[5rem flex w-[100%] flex-col items-center justify-center gap-2">
                  <input className="w-[100%] p-2" type="text" placeholder="Name" />
                  <input className="w-[100%] p-2" type="email" placeholder="Email" />
                  <input className="w-[100%] p-2" type="password" placeholder="password" />
                </div>
                <div className="flex w-[100%] items-center justify-center">
                  <button className="w-[50%] rounded-full bg-red-500 p-1 font-semibold uppercase text-white shadow-md">SIGN UP</button>
                </div>
              </div>
    
              
            </div>
          </div></>
    
        
      )
    }