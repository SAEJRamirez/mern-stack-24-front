import {Chip, Progress, Typography} from "@material-tailwind/react";

const PokeStats = () => {
    return (
        <section className="flex justify-center items-center gap-6">
            <div className="p-2 border rounded-xl border-blue-400 w-1/4">
                <div>
                    <Typography variant="lead">Stats de base</Typography>
                </div>
                <div>
                    <div className="mb-2 flex items-center justify-center gap-4">
                        <Typography className="w-24" variant="p">PV</Typography>
                        <Progress className="w-1/2" value={20} color={"blue"} size="md"/>
                        <Typography className="w-1/3">3/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-4">
                        <Typography className="w-24" variant="p">Attaque</Typography>
                        <Progress className="w-1/2" value={20} color={"blue"} size="md"/>
                        <Typography className="w-1/3">3/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-start gap-4">
                        <Typography className="w-24" variant="p">Défense</Typography>
                        <Progress className="w-1/2" value={20} color={"blue"} size="md"/>
                        <Typography className="w-1/3">3/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-start gap-4">
                        <Typography className="w-24" variant="p">Attaque Spéciale</Typography>
                        <Progress className="w-1/2" value={26.66} color={"blue"} size="md"/>
                        <Typography className="w-1/3">4/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-start gap-4">
                        <Typography className="w-24" variant="p">Défense Spéciale</Typography>
                        <Progress className="w-1/2" value={26.66} color={"blue"} size="md"/>
                        <Typography className="w-1/3">4/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-start gap-4">
                        <Typography className="w-24" variant="p">Vitesse</Typography>
                        <Progress className="w-1/2" value={20} color={"blue"} size="md"/>
                        <Typography className="w-1/3">3/15</Typography>
                    </div>
                </div>
            </div>

            <div className="w-1/4">
                <div className="flex flex-wrap justify-start mb-6">
                    <Typography className="w-full text-left mb-6" variant="lead">Type</Typography>
                    <div className="flex gap-6">
                        <Chip value="Plante" size="sm" className="text-blue-gray-900 w-24" style={{ backgroundColor: "#9bcc50" }} />
                        <Chip value="Poison" className="text-white w-24" style={{ backgroundColor: "#b97fc9" }} />
                    </div>

                </div>
                <div>
                    <Typography className="w-full text-left mb-6" variant="lead">Faiblesse(s)</Typography>
                    <div className="flex flex-wrap gap-6">
                        <Chip value="Feu" size="sm" className="text-white w-24" style={{backgroundColor: "#fd7d24"}}/>
                        <Chip value="Glace" className="text-blue-gray-900 w-24" style={{backgroundColor: "#51c4e7"}}/>
                        <Chip value="Vol" className="text-blue-gray-900 w-24" style={{background: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)"}}/>
                        <Chip value="Psy" className="text-blue-gray-900 w-24" style={{backgroundColor: "#f366b9"}}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PokeStats;