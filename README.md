# kubernetes
learning kubernetes

### Pod
> Smallest object in Kubernetes. Has one or more containers. (Best practice is to have 1 per pod)
```
# Create pod
kubectl create -f pod.yaml
```
```
# Update pod with changes in yaml
kubectl apply -f pod.yaml
```
```
# Delete pod
kubectl delete pod <name>
```

### Replica Set
> Pods wrapped inside Replica Set.

### Deployment
> Replica Set wrapped inside Deployment.