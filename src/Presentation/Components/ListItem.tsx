import {Grid} from "@material-ui/core";
import {ConciliationCard} from "./Cards/ConciliationCard";
import {DashboardCard} from "./Cards/DashboardCard";
import {SourceCard} from "./Cards/SourceCard";
import {UserCard} from "./Cards/UserCard";
import {Dashboard} from "../../DataAccess/Models/Dashboard";
import {Conciliation} from "../../DataAccess/Models/Conciliation";
import {Source} from "../../DataAccess/Models/Source";
import {User} from "../../DataAccess/Models/User";
import {FC} from "react";

interface IProps {
  items: any[]
}

export const ListItem: FC<IProps> = ({items}) => {

  const Card = (item) => {
    if (item instanceof Dashboard) {
      return <DashboardCard
        isActive={item.isActive}
        name={item.dashboardName}
        description={item.description}
        tags={item.tags}
      />
    }
    if (item instanceof Source) {
      return <SourceCard
        company={item.company}
        isActive={item.isActive}
        name={item.name}
        description={item.description}
        tags={item.tags}
      />
    }
    if (item instanceof Conciliation) {
      return <ConciliationCard
        name={item.conciliationName}
        sourceA={item.sourceA}
        sourceB={item.sourceB}
        balance={item.balance}
        isActive={item.isActive}
        description={item.description}
        tags={item.tags}
      />
    }
    if (item instanceof User) {
      return <UserCard
        phone={item.phone}
        email={item.email}
        address={item.address}
        age={item.age}
        gender={item.gender}
        tags={item.tags}
        company={item.company}
        isActive={item.isActive}
        name={item.fullName}
      />
    }
    return null
  }

  return (
    <Grid container spacing={2}>
      {
        items.map((item: any) => (
          <Grid key={item.id} item xs={12} sm={6} md={6} lg={4}>
            {Card(item)}
          </Grid>
        ))
      }
    </Grid>
  )
}
