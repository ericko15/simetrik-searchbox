import {Grid} from "@material-ui/core";
import {ConciliationCard} from "./Cards/ConciliationCard";
import {DashboardCard} from "./Cards/DashboardCard";
import {SourceCard} from "./Cards/SourceCard";
import {UserCard} from "./Cards/UserCard";

export const ListItem = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <ConciliationCard
          tags={['asdasd']}
          isActive={true}
          balance="$3,116.93"
          name="sit"
          sourceA="sunt"
          sourceB="in"
          description="Ullamco elit consectetur proident adipisicing commodo laboris ea tempor excepteur anim ex proident
              cupidatat. Incididunt est velit consectetur duis aliquip laboris in ex dolor tempor velit aliqua do
              veniam. Consequat ut incididunt consequat pariatur aliquip ex nulla et qui excepteur minim commodo
              exercitation veniam. Nulla eu cupidatat proident magna velit ad pariatur culpa et nostrud enim cillum
              dolor. Fugiat nulla eu fugiat cupidatat laboris nisi officia consectetur veniam qui occaecat."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <DashboardCard
          tags={['asdasd']}
          isActive={true}
          name="sit"
          description="Ullamco elit consectetur proident adipisicing commodo laboris ea tempor excepteur anim ex proident
              cupidatat. Incididunt est velit consectetur duis aliquip laboris in ex dolor tempor velit aliqua do
              veniam. Consequat ut incididunt consequat pariatur aliquip ex nulla et qui excepteur minim commodo
              exercitation veniam. Nulla eu cupidatat proident magna velit ad pariatur culpa et nostrud enim cillum
              dolor. Fugiat nulla eu fugiat cupidatat laboris nisi officia consectetur veniam qui occaecat."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <SourceCard
          company="COMPANY"
          tags={['asdasd']}
          isActive={true}
          name="sit"
          description="Ullamco elit consectetur proident adipisicing commodo laboris ea tempor excepteur anim ex proident
              cupidatat. Incididunt est velit consectetur duis aliquip laboris in ex dolor tempor velit aliqua do
              veniam. Consequat ut incididunt consequat pariatur aliquip ex nulla et qui excepteur minim commodo
              exercitation veniam. Nulla eu cupidatat proident magna velit ad pariatur culpa et nostrud enim cillum
              dolor. Fugiat nulla eu fugiat cupidatat laboris nisi officia consectetur veniam qui occaecat."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <UserCard
          address="592 Montgomery Place, Fairview, Vermont, 3033"
          phone="+57 (993) 557-3635"
          email="coopergrant@rodemco.com"
          age={32}
          company="COMPANY"
          genre="male"
          tags={['asdasd']}
          isActive={true}
          name="Cooper Grant"
          description="Ullamco elit consectetur proident adipisicing commodo laboris ea tempor excepteur anim ex proident
              cupidatat. Incididunt est velit consectetur duis aliquip laboris in ex dolor tempor velit aliqua do
              veniam. Consequat ut incididunt consequat pariatur aliquip ex nulla et qui excepteur minim commodo
              exercitation veniam. Nulla eu cupidatat proident magna velit ad pariatur culpa et nostrud enim cillum
              dolor. Fugiat nulla eu fugiat cupidatat laboris nisi officia consectetur veniam qui occaecat."
        />
      </Grid>
    </Grid>
  )
}
