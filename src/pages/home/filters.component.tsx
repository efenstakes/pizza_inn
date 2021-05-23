import { IonChip } from "@ionic/react"
import clsx from 'clsx'

interface ComponentProps {
    selectedFilter: string,
    setSelectedFilter: Function,
}
const FiltersComponent: React.FC<ComponentProps> = ({ selectedFilter, setSelectedFilter }) => {
    return (
        <div className="filters">

            <IonChip
                color="primary"
                outline={ 
                    selectedFilter === 'all' ? false : true
                }
                onClick={
                    ()=> setSelectedFilter('all')
                }
                className={
                    clsx([
                        "app_chip", "filter_chip",
                        {
                            "filter_chip__selected": selectedFilter === 'all'
                        }
                    ])
                }
            >
                All
            </IonChip>
            
            <IonChip
                color="secondary"
                outline={ 
                    selectedFilter === 'deals' ? false : true
                }
                onClick={
                    ()=> setSelectedFilter('deals')
                }
                className={
                    clsx([
                        "app_chip", "filter_chip",
                        {
                            "filter_chip__selected": selectedFilter === 'deals'
                        }
                    ])
                }
            >
                Todays Deals
            </IonChip>

            <IonChip
                color="secondary"
                outline={ 
                    selectedFilter === 'deluxe' ? false : true
                }
                onClick={
                    ()=> setSelectedFilter('deluxe')
                }
                className={
                    clsx([
                        "app_chip", "filter_chip",
                        {
                            "filter_chip__selected": selectedFilter === 'deluxe'
                        }
                    ])
                }
            >
                Deluxe
            </IonChip>
            
            <IonChip
                color="tertiary"
                outline={ 
                    selectedFilter === 'classic' ? false : true
                }
                onClick={
                    ()=> setSelectedFilter('classic')
                }
                className={
                    clsx([
                        "app_chip", "filter_chip",
                        {
                            "filter_chip__selected": selectedFilter === 'classic'
                        }
                    ])
                }
            >
                Classic
            </IonChip>
            
            <IonChip
                color="tertiary"
                outline={ 
                    selectedFilter === 'drinks' ? false : true
                }
                onClick={
                    ()=> setSelectedFilter('drinks')
                }
                className={
                    clsx([
                        "app_chip", "filter_chip",
                        {
                            "filter_chip__selected": selectedFilter === 'drinks'
                        }
                    ])
                }
            >
                Drinks
            </IonChip>

        </div>
    )
}

export default FiltersComponent
