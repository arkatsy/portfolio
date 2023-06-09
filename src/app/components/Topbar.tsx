import DropMenu from "./NavMenuMobile"
import NavMenu from "./NavMenu"
import AvatarWithDetails from "./AvatarWithDetails"

export default function Topbar() {
  return (
    <div className="flex items-center justify-between">
      <AvatarWithDetails />
      <div className="block sm:hidden">
        <DropMenu />
      </div>
      <div className="hidden sm:block">
        <NavMenu />
      </div>
    </div>
  )
}
