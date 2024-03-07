
type Member = {
  name: string
  , avatar: string
  , destUrl : string
}

const allContributors : Member[] = [
  { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
]

const allPatrons : Member[] = [
  { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
  , { name: "Bonnie Green", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", destUrl: ""}
  , { name: "Jese Leos", avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", destUrl: ""}
  , { name: "Roberta Casas", avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", destUrl: ""}
]


function ShowAvatars({ members, section } : { members : Member[], section : string }) {
  return (<>

    <div className="grid grid-cols-4 md:grid-cols-12 lg:grid-cols-12 gap-2">
      {
        members.map((member, index) => {
          return (<div key={index}>
            <div id={ section + index } role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              {member.name}
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <img data-tooltip-target={ section + index } className="w-10 h-10 rounded outline outline-offset hover:outline-rose-400" src={member.avatar} alt="Medium avatar" />
          </div>)
        })
      }
    </div>
  </>)
}

export default function Community() {
  return (<>
    <section className="p-6 bg-white dark:bg-gray-900">
      <p className="text-md text-gray-900 dark:text-gray-100">the FUDD ecosystem exists solely due to the incalculable hours of efforst supplied by those brade people who believe in open source and the taming of advanced technologies.</p>
      <div className="flex  gap-4 mt-4">
        <div className="w-1/2">
          <p className="text-rose-800 dark:text-rose-200">contributors</p>
          <a href="https://github.com/whatsupfudd" target="_blank" className="text-blue-800 dark:text-blue-200">Explore our GitHub repositories.</a>
        </div>
        <div>
          <ShowAvatars members ={ allContributors } section={ "contrib" }/>
        </div>
      </div>
      <div className="flex flex-cols gap-4 mt-4">
        <div className="w-1/2">
          <p className="text-rose-800 dark:text-rose-200">patrons</p>
          <a href="https://patreon.com/whatsupfudd" target="_blank" className="text-blue-800 dark:text-blue-200">Become a patron and help us funding all our efforts.</a>
        </div>
        <div>
          <ShowAvatars members = { allPatrons } section={ "patrons" }/>
        </div>
      </div>
    </section>
  </>)
}